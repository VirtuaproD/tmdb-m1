import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../tmdb.service';
import {MovieGenre} from '../tmdb-data/Movie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
