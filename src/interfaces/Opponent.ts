export interface Opponent {
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
  latitude?: any;
  longitude?: any;
  slug: string;
  division_id: string;
  league_id: string;
}