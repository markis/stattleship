import { Player, League,  PlayingPosition, Team, Season, Roster } from './index';
export interface RosterResponse {
  players: Player[];
  leagues: League[];
  playing_positions: PlayingPosition[];
  teams: Team[];
  seasons: Season[];
  rosters: Roster[];
}