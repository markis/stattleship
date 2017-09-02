import { BaseClient } from './BaseClient';
import { FootballGameLogParams, FootballGameLogResponse, FootballPlayerSeasonStatParams, FootballPlayerSeasonStatsResponse } from '../interfaces/index'

export class NFLClient extends BaseClient {
  constructor(
    token: string,
  ) {
    super(token, 'football', 'nfl');
  }
  
  /**
   * Retrieves NFL Game Logs
   * 
   */
  public gameLogs(params: FootballGameLogParams): Promise<FootballGameLogResponse> {
    return this.callEndPoint('game_logs', params);
  }

  /**
   * Retrieves Player Season Stats
   * 
   */
  public playerSeasonStats(params: FootballPlayerSeasonStatParams): Promise<FootballPlayerSeasonStatsResponse> {
    return this.callEndPoint('player_season_stats', params);
  }
}
