import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { PostsService } from '../../services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-follow-icon',
  templateUrl: './follow-icon.component.html',
  styleUrls: ['./follow-icon.component.scss'],
  animations: [

    trigger('follow', [
        state('not-followed', style({
            color: '#FF443B',
            opacity: '0.4',
            transform: 'scale(0.9)'
        })),
        state('followed', style({
            color: '#FF443B',
            opacity: '1',
            transform: 'scale(1)'

        })),

        transition('not-followed <=> followed', animate('100ms ease-out'))
    ])
  ]
})
export class FollowIconComponent implements OnInit {

  followState = 'not-followed';
  public iconName = 'checkbox-outline';
  @Input() post;
  @Input() userEmail;

  constructor(
    private posts: PostsService) { }

  ngOnInit() {}

  toggleLikeState(post) {

    if (this.followState === 'not-followed') {

      this.followState = 'followed';
      this.iconName = 'checkbox';
      console.log('Followed: ' + post._id + '\n' + this.userEmail );
      this.posts.followPost(post._id, this.userEmail);


    } else {

      this.followState = 'not-followed';
      this.iconName = 'checkbox-outline';
      console.log('Un-Followed');
      this.posts.unFollowPost(post._id, this.userEmail);

    }

  }

}
