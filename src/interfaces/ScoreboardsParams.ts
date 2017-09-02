import { BaseParams } from './BaseParams';

export interface ScoreboardsParams extends BaseParams {
  /**
   * Optional. Game slug.
   */
  game_id: string;
  /**
   * Optional. Team slug such as mlb-bos for the Bruins
   */
  team_id: string;
  /**
   * See interval_type for sport.
   */
  interval_type: string;
  /**
   * Friendly date such as today or tomorrow; or a timestamp; or a date such as 2017-04-22
   */
  on: string;
  /**
   * Friendly date such as 1 week ago or 4 days ago or last Sunday; or a timestamp such as 1448820000
   */
  since: string;
  /**
   * Season slug such as mlb-2017
   */
  season_id: string;
  /**
   * Optional. One of canceled
   */
  status: string;
}