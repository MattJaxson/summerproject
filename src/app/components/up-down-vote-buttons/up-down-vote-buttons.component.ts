import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { PostPageEmitterService } from 'src/app/emitters/post-page-emitter.service';


@Component({
  selector: 'app-up-down-vote-buttons',
  templateUrl: './up-down-vote-buttons.component.html',
  styleUrls: ['./up-down-vote-buttons.component.scss'],
})
export class UpDownVoteButtonsComponent implements OnInit {

  userEmail;

  @Input() postID;
  @Input() postEmail;
  @Input() isUser;
  upVotes$ = new BehaviorSubject(null);
  downVotes$ = new BehaviorSubject(null);

  followingLength$ = new BehaviorSubject(null);
  followingLength = null;
  following = false;

  upVoteLength;
  downVoteLength;

  upVotes;
  downVotes;

  upVoters = [];
  downVoters = [];
  followers = [];

  upVoted = false;
  downVoted = false;

  constructor(
    public posts: PostsService,
    private profile: ProfileService,
    private toast: ToastController,
    private postsEmitterService: PostPageEmitterService,
  ) { }

  ngOnInit() {

    // Get information about post
     this.posts.getPostInfo(this.postID)
      .subscribe( postInfo => {

        this.upVotes = postInfo['upvotes'];
        this.downVotes = postInfo['downvotes'];

        this.upVoters = postInfo['upvoters'];
        this.downVoters = postInfo['downvoters'];

        let followers = postInfo['followers'];

        this.upVotes$.next(this.upVotes);
        this.downVotes$.next(this.downVotes);

        this.upVoteLength = this.upVotes$.getValue();
        this.downVoteLength = this.downVotes$.getValue();

        // Get User Email
        this.profile.getUserDetails()
          .subscribe( userDetails => {
          let userEmail = userDetails['email'];
          let following = false;
          let upVoted = false;
          let downVoted = false;


          followers.find(findFollower);

          function findFollower(follower) {
            if (!follower) {
              // User is not following post
            }

            if (follower === userEmail) {
              following = true;
            }
        }
          this.upVoters.find(findUpVoter);
          this.downVoters.find(findDownVoter);

          function findUpVoter(upVoter) {
            if (!upVoter) {
            }

            if (upVoter === userEmail) {
              return upVoted = true;
            }

            console.log(`Upvoter: ${upVoter}`);
        }

          function findDownVoter(downVoter) {
            if (!downVoter) {
            }

            if (downVoter === userEmail) {
              return downVoted = true;
            }
        }

          this.userEmail = userEmail;
          this.upVoted = upVoted;
          this.downVoted = downVoted;
          this.followers = followers;
          this.following = following;
          console.log(followers.length);

          this.followingLength$.next(followers.length);
          this.followingLength$.subscribe(data => {
            this.followingLength = data;
          });
        });
      });
  }
  async upVotePost() {

    await this.posts.upVotePost(this.postID, this.userEmail)
      .subscribe(data => {
       const upvotes = (data['upvotes']);
       const downvotes = (data['downvotes']);
       console.log(data);
       this.upVotes$.next(upvotes);
       this.downVotes$.next(downvotes);
       this.upVoted = true;
       this.upVoteLength = this.upVotes$.getValue();
       this.downVoteLength = this.downVotes$.getValue();

       if (this.upVoted === true) {

         return this.downVoted = false;
      }
    }
     );
    this.postsEmitterService.postPageRefresh();
    this.upVotePostToast();
  }
  async upVotePostToast() {
    const upVotePostToast = await this.toast.create({
      cssClass: 'upvoted-toast',
      message: 'You have UPVOTED this post.',
      duration: 2000
    });
    upVotePostToast.present();
  }
  async downVotePost() {

    await this.posts.downVotePost(this.postID, this.userEmail)
    .subscribe(data => {
      const upvotes = (data['upvotes']);
      const downvotes = (data['downvotes']);
      console.log(data);
      this.upVotes$.next(upvotes);
      this.downVotes$.next(downvotes);
      this.downVoted = true;
      this.upVoteLength = this.upVotes$.getValue();
      this.downVoteLength = this.downVotes$.getValue();

      if (this.downVoted === true) {
        return this.upVoted = false;
      }
    }
   );
    this.postsEmitterService.postPageRefresh();
    this.downVoteToast();
  }
  async downVoteToast() {
    const downVoteToast = await this.toast.create({
      cssClass: 'downvoted-toast',
      message: 'You have DOWNVOTED this post.',
      duration: 2000
    });
    downVoteToast.present();
  }
  async follow(postID) {
    await console.log('Following Post');
    await console.log(postID);
    await this.posts.followPost(postID, this.postEmail);
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
    await this.posts.unFollowPost(postID, this.postEmail);
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
}
