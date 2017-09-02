import { BaseParams } from '../BaseParams';

export interface PlayerSeasonStatsParams extends BaseParams {
  /**
   * Current season	Season slug such as nfl-2016-2017
   */
  season_id?: string;
  /**
   * Team slug such as nfl-nyj
   */
  team_id?: string;
  /**
   * Player slug such as nfl-tom-brady
   */
  player_id?: string;
  /**
   * See interval_type for sport.
   */
  interval_type?: string;
  /**
   * Friendly date such as today or tomorrow; or a timestamp; or a date such as 2016-08-22
   */
  on?: string;
}