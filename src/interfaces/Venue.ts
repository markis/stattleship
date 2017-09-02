export interface Venue {
  id: string;
  created_at: Date;
  updated_at: Date;
  abbreviation: string;
  capacity: number;
  city: string;
  country: string;
  field_type: string;
  name: string;
  slug: string;
  state: string;
  stadium_type: string;
  time_zone: string;
  latitude: number;
  longitude: number;
  league_id: string;
  season_id: string;
}