import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-up-down-vote-buttons',
  templateUrl: './up-down-vote-buttons.component.html',
  styleUrls: ['./up-down-vote-buttons.component.scss'],
})
export class UpDownVoteButtonsComponent implements OnInit {

  userEmail;

  @Input() postID;
  upVotes$ = new BehaviorSubject(null);
  downVotes$ = new BehaviorSubject(null);

  upVoteLength;
  downVoteLength;

  upVotes;
  downVotes;

  upVoters = [];
  downVoters = [];

  upVoted = false;
  downVoted = false;

  constructor(
    public posts: PostsService,
    private profile: ProfileService,
    private toast: ToastController
  ) { }

  async ngOnInit() {

    // Get information about post
    await this.posts.getPostInfo(this.postID)
      .subscribe( postInfo => {

        this.upVotes = postInfo['upvotes'];
        this.downVotes = postInfo['downvotes'];

        this.upVoters = postInfo['upvoters'];
        this.downVoters = postInfo['downvoters'];

        this.upVotes$.next(this.upVotes);
        this.downVotes$.next(this.downVotes);

        this.upVoteLength = this.upVotes$.getValue();
        this.downVoteLength = this.downVotes$.getValue();

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
          this.upVoted = upVoted;
          this.downVoted = downVoted;
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


    console.log(this.upVoteLength);
    console.log(this.downVoteLength);

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

}
