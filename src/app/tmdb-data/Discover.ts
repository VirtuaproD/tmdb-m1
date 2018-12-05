import {MovieResult} from './searchMovie';

export interface DiscoverQuery {
  language?: string;
  sort_by?: string;
  with_genres?: string;
}

export interface DiscoverMovieResponse {
  page?: number;
  result?: MovieResult;
  total_result?: number;
  total_pages?: number;

}
