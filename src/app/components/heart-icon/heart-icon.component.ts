import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FavoritesService } from '../../services/favorites.service';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-heart-icon',
  templateUrl: './heart-icon.component.html',
  styleUrls: ['./heart-icon.component.scss'],
  animations: [

    trigger('heart', [
        state('unfavorited', style({
            color: '#faa71b',
            opacity: '1',
            transform: 'scale(0.9)'
        })),
        state('favorited', style({
            color: '#faa71b',
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
  @Input() favoriteJobs;

  constructor(
    private favorites: FavoritesService,
    private profile: ProfileService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      for (const job of this.favoriteJobs) {
        if (this.job._id == job._id) {
          this.setFavoriteStateOn();
        }
      }
    }, 300);
  }

  toggleLikeState() {

    if (this.favoriteState === 'unfavorited') {
      this.setFavoriteStateOn()
      this.favorites.favoriteThisJob(this.job);
    } else {
      this.setFavoriteStateOff()
      this.favorites.unFavoriteThisJob(this.job);
    }

  }

  setFavoriteStateOn() {
    this.favoriteState = 'favorited';
    this.iconName = 'heart';

 }

  setFavoriteStateOff() {
    this.favoriteState = 'unfavorited';
    this.iconName = 'heart-empty';
  }

}
