import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { PostsService } from 'src/app/services/post.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-follow-comment-buttons',
  templateUrl: './follow-comment-buttons.component.html',
  styleUrls: ['./follow-comment-buttons.component.scss'],
})
export class FollowCommentButtonsComponent implements OnInit {

  userEmail;
  comments = [];
  followers = [];

  @Input() postID;

  constructor(
    private router: Router,
    public posts: PostsService,
    private profile: ProfileService,
    private toast: ToastController
  )  { }

  async ngOnInit() {
    // Get Users Email
    await this.profile.getUserDetails()
      .subscribe( details => {
        this.userEmail = details['email'];
      });

      // Get information about post
    await this.posts.getPostInfo(this.postID)
        .subscribe( details => {
          this.comments = details['comments'];
          this.followers = details['followers'];
        });

  }

  async follow() {
    await console.log('Upvoting');
    await this.followToast();
  }
  async followToast() {
    const followToast = await this.toast.create({
      cssClass: 'followed-toast',
      message: 'You are FOLLOWING this post',
      duration: 2000
    });
    followToast.present();
  }

  async unFollowToast() {
    const unFollowToast = await this.toast.create({
      cssClass: 'unfollowed-toast',
      message: 'You are UNFOLLOWING this post',
      duration: 2000
    });
    unFollowToast.present();
  }

  postPage() {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/posts/post-page', this.postID]);
  }

}
