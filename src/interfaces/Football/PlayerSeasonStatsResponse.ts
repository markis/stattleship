import { FootballPlayerSeasonStat, Team, League, Season, Division, Conference } from '../index';

export interface PlayerSeasonStatsResponse {
  seasons: Season[];
  leagues: League[];
  teams: Team[];
  divisions: Division[];
  conferences: Conference[];
  player_season_stats: FootballPlayerSeasonStat[];
}