import { BaseParams } from './BaseParams';

export interface RosterParams extends BaseParams {
  /**
   * Team slug such as mlb-nyy for the Yankees
   */
  team_id: string;
  /**
   * Season slug such as mlb-2016
   */
  season_id: string;
}