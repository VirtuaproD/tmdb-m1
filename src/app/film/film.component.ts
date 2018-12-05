import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TmdbService} from "../tmdb.service";
import {MovieCast, MovieGenre, MovieResponse, ProductionCompany, ProductionCountry, SpokenLanguage} from "../tmdb-data/Movie";
import {MovieListService} from "../movie-list.service";
import {ListStructure} from "../dataTypes/ListStructure";
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  movieId: number;
  movie: MovieResponse;
  cast: MovieCast[];
  isUserLogged: boolean;


  constructor(private route: ActivatedRoute, private tmdb: TmdbService, private movieList: MovieListService) {
    this.isUserLogged = false;
    this.movieId = +this.route.snapshot.paramMap.get('id');

    this.tmdb.getMovie(this.movieId, {
      language: "fr-FR"
    }).then(res => {
      this.movie = res;
    });

    this.tmdb.getMovieCredit(this.movieId).then(res => {
      this.cast = res.cast;
    });
  }

  ngOnInit() {
  }

  getPath(): string {
    if (this.movie.poster_path) {
      return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
    }
    return "/assets/mockup_poster.jpg";
  }
}

