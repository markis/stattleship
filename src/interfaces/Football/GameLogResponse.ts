import { FootballGameLog, FootballGame, Team, League, Season, Venue, Official,  Player, Opponent } from '../index';

export interface GameLogResponse {
  games: FootballGame[];
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
  game_logs: FootballGameLog[];
}