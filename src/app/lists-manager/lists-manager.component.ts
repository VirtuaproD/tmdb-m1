import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MovieListService} from '../movie-list.service';
import {ListStructure} from '../dataTypes/ListStructure';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-lists-manager',
  templateUrl: './lists-manager.component.html',
  styleUrls: ['./lists-manager.component.css']
})
export class ListsManagerComponent implements OnInit {
  addingList: boolean;
  newListe: string;
  userLists: ListStructure[];

  constructor(private route: Router, public listService: MovieListService) {
    this.addingList = false;
    this.listService.getUser().subscribe( u => {
      if (u) {
        this.listService.getUserLists().subscribe( l => {
            this.userLists = l;
          }
        );
      } else {
        this.userLists = undefined;
      }
    });

  }

  ngOnInit() {
  }

  createList() {
    this.listService.addList(this.newListe);
  }
}