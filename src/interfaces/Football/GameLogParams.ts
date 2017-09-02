import { BaseParams } from '../BaseParams';

export interface GameLogParams extends BaseParams {
  /**
   * Game slug such as nfl-2015-2016-nyg-min-2015-12-27-2030 for Giants vs Vikings
   */
  game_id: string;
  /**
   * Player slug such as nfl-tom-brady
   */
  player_id: string;
  /**
   * Team slug such as nfl-ne for the Patriots
   */
  team_id: string;
  /**
   * Either Seeinterval_type` for sport.
   */
  interval_type: string;
  /**
   * Season slug such as nfl-2015-2016
   */	
  season_id: string;
  /**
   * Friendly date such as today or tomorrow; or a timestamp; or a date such as 2016-05-22
   */
  on: string;
  /**
   * Friendly date such as 1 week ago or 4 days ago or last Sunday; or a timestamp such as 1448820000
   */
  since: string;
  /**
   * For NFL its week number such as 6
   */
  week: string;
  /**
   * Game status of in_progress upcoming or ended
   */
  status: string;
}