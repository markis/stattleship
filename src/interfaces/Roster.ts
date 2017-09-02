export interface Roster {
  id: string;
  created_at: Date;
  updated_at: Date;
  last_game_started_at: string;
  status: string;
  player_id: string;
  team_id: string;
  season_id: string;
}