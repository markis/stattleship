import { BaseParams } from './BaseParams';

export interface InjuryParams extends BaseParams {
  /**
   * Season slug such as mlb-2016
   */
  season_id: string;
}