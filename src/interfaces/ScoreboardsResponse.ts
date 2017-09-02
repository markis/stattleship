import { FootballGame, Team, League, Season, Venue, Official, Scoreboard } from './index';

export interface ScoreboardsResponse {
  games: FootballGame[];
  home_teams: Team[];
  leagues: League[];
  away_teams: Team[];
  winning_teams: Team[];
  seasons: Season[];
  venues: Venue[];
  officials: Official[];
  scoreboards: Scoreboard[];
}