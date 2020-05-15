import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { PostsService } from 'src/app/services/post.service';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-follow-comment-buttons',
  templateUrl: './follow-comment-buttons.component.html',
  styleUrls: ['./follow-comment-buttons.component.scss'],
})
export class FollowCommentButtonsComponent implements OnInit {

  userEmail;
  comments = [];
  followers = [];
  following = false;

  @Input() postID;
  followingLength$ = new BehaviorSubject(null);
  followingLength = null;

  constructor(
    private router: Router,
    public posts: PostsService,
    private profile: ProfileService,
    private toast: ToastController
  )  { }

   ngOnInit() {
      // Get information about post
     this.posts.getPostInfo(this.postID)
          .subscribe( postDetails => {
           let comments = postDetails['comments'];
           let followers = postDetails['followers'];
           let following = false;

           this.profile.getUserDetails().subscribe( userDetails => {
            let userEmail = userDetails['email'];

            followers.find(findFollower);

            function findFollower(follower) {
              if (!follower) {
                // User is not following post
              }

              if (follower === userEmail) {
                following = true;
              }
          }

            this.followers = followers;
            this.comments = comments;
            this.userEmail = userEmail;
            this.following = following;
            this.followingLength$.next(followers.length);
            this.followingLength$.subscribe(data => {
              this.followingLength = data;
            });
        });

      })
  }


  async follow(postID) {
    await console.log('Following Post');
    await console.log(postID);
    await this.posts.followPost(postID, this.userEmail).subscribe();
    this.following = true;
    this.followingLength$.next(this.followingLength + 1);
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

  async unFollow(postID) {
    await console.log('Unfollowing Post');
    await console.log(postID);
    await this.posts.unFollowPost(postID, this.userEmail).subscribe();
    this.following = false;
    this.followingLength$.next(this.followingLength - 1);
    await this.unFollowToast();
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
