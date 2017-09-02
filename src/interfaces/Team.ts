export interface Team {
  id: string;
  created_at: Date;
  updated_at: Date;
  color: string;
  colors: string[];
  hashtag: string;
  hashtags: string[];
  location: string;
  name: string;
  nickname: string;
  latitude: number;
  longitude: number;
  slug: string;
  division_id: string;
  league_id: string;
}