import { Player, League, Team, Season, Injury } from './index';

export interface InjuryResponse {
  players: Player[];
  leagues: League[];
  teams: Team[];
  seasons: Season[];
  injuries: Injury[];
}