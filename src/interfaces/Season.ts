export interface Season {
  id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  current_interval_type: string;
  starts_on: string;
  ends_on: string;
  stats_coverage: string;
  slug: string;
  league_id: string;
}