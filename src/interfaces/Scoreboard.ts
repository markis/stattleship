export interface Scoreboard {
  id: string;
  created_at: Date;
  updated_at: Date;
  away_description: string;
  away_team_outcome: string;
  away_team_score: number;
  away_team_verb: string;
  broadcast: string;
  clock: string;
  clock_seconds: number;
  game_clock_seconds: number;
  game_over: boolean;
  home_description: string;
  home_team_outcome: string;
  home_team_verb: string;
  home_team_score: number;
  period: number;
  period_label: string;
  points: number;
  score: string;
  status: string;
  title: string;
  week_label: string;
  game_id: string;
}
