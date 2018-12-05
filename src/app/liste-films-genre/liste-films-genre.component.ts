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
  public  movies: DiscoverMovieResponse;

  constructor(private tmdb: TmdbService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.genreId = this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe((param) => {
      this.genreId = param.get('id');
      this.tmdb.getDiscoverMovies({language: "fr-FR", sort_by: "popularity.desc", with_genres: this.genreId.toString()})
        .then( (res) => {
          this.movies = res;

        });
    });


  }

}
