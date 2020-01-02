import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../../services/favorites.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favoriteJobs;

  constructor(
    private favorites: FavoritesService
  ) { }

  ngOnInit() {
    this.favorites.favoriteJobs$.subscribe(favorites => {
      this.favoriteJobs = Object.values(favorites);
    });
  }

  favoriteJobPage() {
    console.log('Going to favorite bad');
  }


}
