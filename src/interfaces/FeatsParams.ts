import { BaseParams } from './BaseParams';

export interface FeatsParams extends BaseParams {
  /**
   * Game slug such as mlb-2015-was-mil-2015-06-14-1310 for Bulls vs Mavericks
   */
  game_id?: string;
  /**
   * Player slug such as mlb-david-ortiz for David Ortiz
   */
  player_id?: string;
  /**
   * Team slug such as mlb-kc for the Kansas City Royals
   */
  team_id?: string;
  /**
   * current interval	See interval_type for sport.
   */
  interval_type?: string;
  /**
   * Current season	Season slug such as mlb-2016
   */
  season_id?: string;
  /**
   * Friendly date such as today or tomorrow; or a timestamp; or a date such as 2016-05-22
   */
  on?: string;
  /**
   * Friendly date such as 1 week ago or 4 days ago or last Sunday; or a timestamp such as 1448820000
   */
  since?: string;
  /**
   * Feats have levels 0 to 5 where 0 is typical and 3 is rare and 5 is new record
   */
  level?: string;
  /**
   * The stat name for the feat
   */
  name?: string;
}