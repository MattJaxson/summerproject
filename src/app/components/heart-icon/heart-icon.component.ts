import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FavoritesService } from '../../services/favorites.service';


@Component({
  selector: 'app-heart-icon',
  templateUrl: './heart-icon.component.html',
  styleUrls: ['./heart-icon.component.scss'],
  animations: [

    trigger('heart', [
        state('unfavorited', style({
            color: '#FF443B',
            opacity: '0.4',
            transform: 'scale(0.9)'
        })),
        state('favorited', style({
            color: '#FF443B',
            opacity: '1',
            transform: 'scale(1)'

        })),

        transition('unfavorited <=> favorited', animate('100ms ease-out'))
    ])
  ]
})
export class HeartIconComponent implements OnInit {

  favoriteState = 'unfavorited';
  public iconName = 'heart-empty';
  @Input() job;

  constructor(
    private favorites: FavoritesService
  ) { }

  ngOnInit() {}

  toggleLikeState() {

    if (this.favoriteState === 'unfavorited') {

      this.favoriteState = 'favorited';
      this.iconName = 'heart';
      this.favorites.favoriteThisJob(this.job);

    } else {

      this.favoriteState = 'unfavorited';
      this.iconName = 'heart-empty';
      this.favorites.unFavoriteThisJob(this.job);

    }

  }

}
