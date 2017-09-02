import { League, PlayingPosition, Team, Player } from './index';

export interface PlayerResponse {
  leagues: League[];
  playing_positions: PlayingPosition[];
  teams: Team[];
  players: Player[];
}