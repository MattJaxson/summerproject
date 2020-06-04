import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostsService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { BehaviorSubject } from 'rxjs';
import { PostPageEmitterService } from 'src/app/emitters/post-page-emitter.service';

@Component({
  selector: 'app-comment-vote-bar',
  templateUrl: './comment-vote-bar.component.html',
  styleUrls: ['./comment-vote-bar.component.scss'],
})
export class CommentVoteBarComponent implements OnInit {

  userEmail;

  @Input() postID;
  @Input() commentID;
  upVoteCount$ = new BehaviorSubject(0);
  downVoteCount$ = new BehaviorSubject(0);

  upVoteLength;
  downVoteLength;

  upVotes;
  downVotes;

  upVoters;
  downVoters;

  currentUserUpvoted = false;
  currentUserDownvoted = false;

  constructor(
    public posts: PostsService,
    private profile: ProfileService,
    private toast: ToastController,
    private postEmitterService: PostPageEmitterService,
  ) { }

  async ngOnInit() {

    // Get information about comment
    this.posts.getPostInfo(this.postID)
      .subscribe(postInfo => {
        let theComment;
        let allComments = postInfo['comments'];
        allComments.find(comment => {

          if (comment._id === this.commentID) {
            this.upVoters = comment['upvoters'];
            this.downVoters = comment['downvoters'];


            this.upVotes = comment['upvotes'];
            this.downVotes = comment['downvotes'];

            this.upVoteCount$.next(this.upVotes);
            this.downVoteCount$.next(this.downVotes);

            this.upVoteLength = this.upVoteCount$.getValue();
            this.downVoteLength = this.downVoteCount$.getValue();
            return;
          }
          console.log(theComment);
        });

        // Get User Email
        this.profile.getUserDetails()
          .subscribe(userDetails => {
            let userEmail = userDetails['email'];
            let upVoted = false;
            let downVoted = false;
            this.upVoters.find(findUpVoter);
            this.downVoters.find(findDownVoter);
            function findUpVoter(upVoter) {
              if (!upVoter) {
              }
              if (upVoter === userEmail) {
                return upVoted = true;
              }
              console.log(upVoter);
            }
            function findDownVoter(downVoter) {
              if (!downVoter) {
              }
              if (downVoter === userEmail) {
                return downVoted = true;
              }
            }
            console.log('Current user: ', userEmail);
            this.userEmail = userEmail;
            this.currentUserUpvoted = upVoted;
            this.currentUserDownvoted = downVoted;
          });
      });
  }

  refreshAfterComment() {
    this.postEmitterService.postPageRefresh();
  }

   upVoteComment() {
     this.posts.upVoteComment(this.postID, this.commentID, this.userEmail)
      .subscribe(data => {
        const upvotes = data['upvotes'];
        const downvotes = data['downvotes'];
        console.log(data);
        this.upVoteCount$.next(upvotes);
        this.downVoteCount$.next(downvotes);
        this.currentUserUpvoted = true;
        this.upVoteLength = this.upVoteCount$.getValue();
        this.downVoteLength = this.downVoteCount$.getValue();

        if (this.currentUserUpvoted === true) {
          return this.currentUserDownvoted = false;
        }
    }
     );

     this.upVoteCommentToast();
     this.refreshAfterComment();
  }

  async upVoteCommentToast() {
    const upVotePostToast = await this.toast.create({
      cssClass: 'upvoted-toast',
      message: 'You have UPVOTED this comment.',
      duration: 2000
    });
    upVotePostToast.present();
  }


   downVoteComment() {

     this.posts.downVoteComment(this.postID, this.commentID, this.userEmail)
    .subscribe(data => {

      const upvotes = data['upvotes'];
      const downvotes = data['downvotes'];
      console.log(data);
      this.upVoteCount$.next(upvotes);
      this.downVoteCount$.next(downvotes);
      this.currentUserDownvoted = true;
      this.upVoteLength = this.upVoteCount$.getValue();
      this.downVoteLength = this.downVoteCount$.getValue();

      if (this.currentUserDownvoted === true) {
        return this.currentUserUpvoted = false;
      }
    }
   );

     this.downVoteCommentToast();
     this.refreshAfterComment();
  }

  async downVoteCommentToast() {
    const downVoteToast = await this.toast.create({
      cssClass: 'downvoted-toast',
      message: 'You have DOWNVOTED this comment.',
      duration: 2000
    });
    downVoteToast.present();
  }

}
