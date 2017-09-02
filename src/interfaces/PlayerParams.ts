import { BaseParams } from './BaseParams';

export interface PlayerParams extends BaseParams {
  /**
   * Team slug such as nhl-ny for the Giants
   */
  team_id: string;
  birth_date: string;
}