import { BaseParams } from './BaseParams';

export interface OfficialParams extends BaseParams {
  /**
   * Optional. Slug id of a single official to fetch
   */
  official_slug: string;
  /**
   * Optional role like umpire, etc. See Official Roles per League above.
   */
  official_roles: string;
}
