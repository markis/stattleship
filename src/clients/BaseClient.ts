import { stringify } from 'querystring';
import { request, RequestOptions } from 'https';
import { BaseParams, FeatsParams, FeatsResponse, InjuryParams, InjuryResponse, OfficialParams, OfficialResponse, PlayerParams, PlayerResponse, RosterParams, RosterResponse, ScoreboardsParams, ScoreboardsResponse, FootballGameParams, FootballGameResponse } from '../interfaces/index';

export abstract class BaseClient {
  private defaultOptions: RequestOptions;

  constructor(
    private token: string,
    private sport: string,
    private league: string
  ) {
    this.defaultOptions = Object.freeze({
      hostname: 'api.stattleship.com',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${this.token}`,
        'Accept': 'application/vnd.stattleship.com; version=1'
      },
    });
  }

  protected callEndPoint<T, U extends BaseParams>(endpoint: string, params: U): Promise<T> {
    return new Promise((resolve, reject) => {
      const options = Object.assign({}, this.defaultOptions, {
        path: `/${this.sport}/${this.league}/${endpoint}?${stringify(params)}`
      });
    
      const req = request(options, (res) => {
        const buffer: string[] = [];
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          if (chunk instanceof Buffer) {
            chunk = chunk.toString('utf8');
          }
          buffer.push(chunk);
        });
        res.on('end', () => {
          if (res.statusCode === 200) {
            try {
              const data = JSON.parse(buffer.join(''));
              resolve(data);
            } catch(e) {
              reject(buffer.join(''));
            }
          } else {
            reject(res.statusMessage);
          }
        });
      });
      req.on('error', err => reject(err));
      
      req.end();
    })
  }
  
  /**
   * Create a player_key from names
   *  ex. createPlayerKey('Tom', 'Brady') -> 'nfl-tom-brady'
   * 
   * @param names Array of names to be joined
   */
  public createPlayerKey(...names: string[]) {
    names.unshift(this.league);
    return names.join('-')
                .toLowerCase()
                .replace(/\W/g, '-')
                .replace(/[-]+/g, '-')
  }

  /**
   * Retrieves Feats
   * 
   */
  public feats(params: FeatsParams): Promise<FeatsResponse> {
    return this.callEndPoint('feats', params);
  }
  
  /**
   * Retrieves Games
   * 
   */
  public games(params: FootballGameParams): Promise<FootballGameResponse> {
    return this.callEndPoint('games', params);
  }
  
  /**
   * Retrieves Injuries
   * 
   */
  public injuries(params: InjuryParams): Promise<InjuryResponse> {
    return this.callEndPoint('injuries', params);
  }
  
  /**
   * Retrieves Officials
   * 
   */
  public officials(params: OfficialParams): Promise<OfficialResponse> {
    return this.callEndPoint('officials', params);
  }
  
  /**
   * Retrieves Players
   * 
   */
  public players(params: PlayerParams): Promise<PlayerResponse> {
    return this.callEndPoint('players', params);
  }
  
  /**
   * Retrieves Rosters
   * 
   */
  public rosters(params: RosterParams): Promise<RosterResponse> {
    return this.callEndPoint('rosters', params);
  }
  
  /**
   * Retrieves Scoreboards
   * 
   */
  public scoreboards(params: ScoreboardsParams): Promise<ScoreboardsResponse> {
    return this.callEndPoint('scoreboards', params);
  }
}
