import { Game } from './Game';
import { GameLog } from './GameLog';
import { Team } from '../Team';
import { League } from '../League';
import { Season } from '../Season';
import { Venue } from '../Venue';
import { Official } from '../Official';
import { Player } from '../Player';
import { Opponent } from '../Opponent';

export interface GamesResponse {
  games: Game[];
  home_teams: Team[];
  leagues: League[];
  away_teams: Team[];
  winning_teams: Team[];
  seasons: Season[];
  venues: Venue[];
  officials: Official[];
  players: Player[];
  teams: Team[];
  opponents: Opponent[];
  game_logs: GameLog[];
}