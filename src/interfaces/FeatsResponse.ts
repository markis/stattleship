import { FootballGame, Team, League, Season, Venue, Official, Player, Feat } from './index';

export interface FeatsResponse {
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
  feats: Feat[];
}