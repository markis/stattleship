export interface Injury {
  id: string;
  created_at: Date;
  updated_at: Date;
  location_name: string;
  started_on: string;
  status_updated_at: Date;
  note: string;
  status: string;
  status_label: string;
  player_id: string;
  season_id: string;
  team_id: string;
}