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
  upvotes$;
  downvotes$;

  @Input() postID;
  upvote$Subject = new BehaviorSubject(null);
  downvote$Subject = new BehaviorSubject(null);


  constructor(
    public posts: PostsService,
    private profile: ProfileService,
    private toast: ToastController
  ) { }

  async ngOnInit() {

    // Get Users Email
    await this.profile.getUserDetails()
      .subscribe( details => {
        this.userEmail = details['email'];
      });

    // Get information about post
    await this.posts.getPostInfo(this.postID)
      .subscribe( details => {
        let upvotes = details['upvotes'];
        let downvotes = details['downvotes'];
        this.upvote$Subject.next(upvotes);
        this.downvote$Subject.next(downvotes);
      });

    // subscribe to upvote and downvote bsubjects
    await this.upvote$Subject
      .subscribe(data => {
        this.upvotes$ = data;
      });

      // subscribe to upvote and downvote bsubjects
    await this.downvote$Subject
    .subscribe(data => {
      this.downvotes$ = data;
    });




  }

  async upVotePost() {
    await console.log('Upvoting');
    await this.posts.upVotePost(this.postID, this.userEmail);
    await this.upvote$Subject.next(this.upvotes$);
    await this.upVotePostToast();
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
    await console.log('Downvoting');
    await this.posts.downVotePost(this.postID, this.userEmail);
    await this.downvote$Subject.next(this.downvotes$);
    await this.downVoteToast();
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
