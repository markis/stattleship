export interface League {
  id: string;
  created_at: Date;
  updated_at: Date;
  abbreviation: string;
  color: string;
  minutes_per_period: number;
  name: string;
  periods: number;
  slug: string;
  sport: string;
}