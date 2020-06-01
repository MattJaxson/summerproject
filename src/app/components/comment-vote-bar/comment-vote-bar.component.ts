import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostsService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { BehaviorSubject } from 'rxjs';

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

  upVoteCount;
  downVoteCount;

  upVoters = [];
  downVoters = [];

  currentUserUpvoted = false;
  currentUserDownvoted = false;

  constructor(
    public posts: PostsService,
    private profile: ProfileService,
    private toast: ToastController
  ) { }

  async ngOnInit() {

    // Get information about comment
    await this.posts.getPostInfo(this.postID)
      .subscribe( postInfo => {
        let comment;
        for (const commentIterator of postInfo['comments']) {
          if (commentIterator['_id'] == this.commentID) {
            comment = commentIterator;
          }
        }

        this.upVoteCount = comment['upvotes'];
        this.downVoteCount = comment['downvotes'];

        this.upVoters = comment['upvoters'];
        this.downVoters = comment['downvoters'];

        this.upVoteCount$.next(this.upVoteCount);
        this.downVoteCount$.next(this.downVoteCount);

        // this.upVoteLength = this.upVotes$.getValue();
        // this.downVoteLength = this.downVotes$.getValue();

        // Get User Email
        this.profile.getUserDetails()
          .subscribe( userDetails => {
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

          this.userEmail = userEmail;
          this.currentUserUpvoted = upVoted;
          this.currentUserDownvoted = downVoted;
        });
      });
  }

  async upVoteComment() {
    await this.posts.upVoteComment(this.postID, this.commentID, this.userEmail)
      .subscribe(data => {
       const upvotes = (data['upvotes']);
       const downvotes = (data['downvotes']);
       console.log(data);
       this.upVoteCount$.next(upvotes);
       this.downVoteCount$.next(downvotes);
       this.currentUserUpvoted = true;
      //  this.upVoteLength = this.upVoteCount$.getValue();
      //  this.downVoteLength = this.downVoteCount$.getValue();

       if (this.currentUserUpvoted === true) {

         return this.currentUserDownvoted = false;
      }
    }
     );


    // console.log(this.upVoteLength);
    // console.log(this.downVoteLength);

    this.upVoteCommentToast();
  }

  async downVoteComment() {

    await this.posts.downVoteComment(this.postID, this.commentID, this.userEmail)
    .subscribe(data => {
      const upvotes = (data['upvotes']);
      const downvotes = (data['downvotes']);
      console.log(data);
      this.upVoteCount$.next(upvotes);
      this.downVoteCount$.next(downvotes);
      this.currentUserDownvoted = true;
      // this.upVoteLength = this.upVoteCount$.getValue();
      // this.downVoteLength = this.downVoteCount$.getValue();

      if (this.currentUserDownvoted === true) {

        return this.currentUserUpvoted = false;
      }
    }
   );

    this.downVoteCommentToast();
  }

  async upVoteCommentToast() {
    const upVotePostToast = await this.toast.create({
      cssClass: 'upvoted-toast',
      message: 'You have UPVOTED this comment.',
      duration: 2000
    });
    upVotePostToast.present();
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
