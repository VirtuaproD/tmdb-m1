import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../tmdb.service';
import {ActivatedRoute} from '@angular/router';
import {DiscoverMovieResponse} from '../tmdb-data/Discover';

@Component({
  selector: 'app-liste-films-genre',
  templateUrl: './liste-films-genre.component.html',
  styleUrls: ['./liste-films-genre.component.css']
})
export class ListeFilmsGenreComponent implements OnInit {
  private genreId: string;
  public genreName: string;
  public movies: DiscoverMovieResponse;
  public sortdesc: boolean;

  constructor(private tmdb: TmdbService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((param) => {
      this.sortdesc = true;
      this.genreId = param.get('id');
      this.genreName = this.tmdb.getMovieGenreName(parseInt(param.get('id'), 10));
      this.discoverMovies();
    });


  }

  private discoverMovies() {
    this.tmdb.getDiscoverMovies({language: "fr-FR", sort_by: this.getPopularitySort(), with_genres: this.genreId.toString()})
      .then( (res) => {
        this.movies = res;
      });
  }

  private getPopularitySort(): string {
    return this.sortdesc ? "popularity.desc" : "popularity.asc";
  }

  public changeSort(): void {
    this.sortdesc = !this.sortdesc;
    this.discoverMovies();
  }

}
