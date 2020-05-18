import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, AlertController, ModalController, IonContent, IonFab } from '@ionic/angular';
import { formatDistanceToNow } from 'date-fns';
// import { ReportModalPage} from './post-page-modals/report-modal/report-modal.page';


@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.page.html',
  styleUrls: ['./post-page.page.scss'],
})
export class PostPagePage implements OnInit {

  @ViewChild(IonContent, {static: true}) content: IonContent;
  @ViewChild('ion-fab', {static: true}) fab: IonFab;
  commentForm: FormGroup;

  userEmail;
  userFullName;
  showFab = false;
  following = false;

  postID;
  commentID;
  creatorName;
  creatorEmail;
  date;
  followers;
  comments;
  post;

  // debugging
  scroll = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private posts: PostsService,
    private profile: ProfileService,
    private formBuilder: FormBuilder,
    private toast: ToastController,
    private modal: ModalController
    ) { }

  ngOnInit() {

    // Get Post ID from navigation params on the main posts tab
    const id  = this.activatedRoute.snapshot.paramMap.get('_id');
    this.postID = id;

    // Get the user's information to insert into the comment metadata
    this.profile.getUserDetails().subscribe(
      details => {
        let userEmail = details['email'];
        let userFullName = details['fullName'];

        // Get information about selected post.
        // Format its date on the front end
        // initiate this components post metadata from data in Posts Service
        this.posts.getPostInfo(this.postID).subscribe(
          postInfo =>  {
            const comments = postInfo['comments'];
            const creatorEmail = postInfo['creatorEmail'];
            const creatorName = postInfo['creatorName'];
            const post = postInfo['post'];
            const followers = postInfo['followers'];
            let following = false;
            let date = formatDistanceToNow(
              new Date(postInfo['date']), {
                includeSeconds: true,
                addSuffix: true
              });

            followers.find(findFollower);

            function findFollower(follower) {
              if (!follower) {
              }

              if (follower === userEmail) {
                following = true;
              }
          }

            for (const comment of comments) {
              comment.date = formatDistanceToNow( new Date(comment.date), {
                includeSeconds: true,
                addSuffix: true
              });
             }

            this.creatorName = creatorName;
            this.creatorEmail = creatorEmail;
            this.date = date;
            this.followers = followers;
            this.comments = comments;
            this.following = following;
            this.userEmail = userEmail;
            this.userFullName = userFullName;
            this.post = post;

            this.posts.commentsSubject$.next(comments.reverse());

          }
        );
      }
    );

    // To collect comment data
    this.commentForm = this.formBuilder.group({
      comment: ['']
    });

    this.commentForm.controls.comment.valueChanges.subscribe(data => {

      if (data === '') {
      console.log('Value is empty');
      this.commentForm.markAsPristine();
      }

      console.log(this.commentForm);
    });


    // Subscribe to comments Behavior subject for live upates, specifically when the user posts a comment on the UI.
    this.posts.commentsSubject$.subscribe(commentsFromSub => {
      this.comments = commentsFromSub;
    });
  }

  back() {
    this.router.navigate(['/home/posts']);
  }

  async follow(postID) {
    await console.log('Following Post');
    await console.log(postID);
    await this.posts.followPost(postID, this.userEmail).subscribe();
    this.following = true;
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

  logScrolling(event) {

    // if (event.detail) {
    //   console.log('ScrollTop: ' + event.detail.scrollTop);
    //   console.log('Y: ' + event.detail.currentY);
    //   console.log('Event Details: ' + event.detail);
    // }

    if (event.detail.currentY >= 480) {
      this.showFab = true;
    }

    if (event.detail.currentY <= 480) {
      this.showFab = false;
    }

  }
  ScrollToTop() {
    this.content.scrollToTop(1500);
  }

  async comment(comment) {

    // Reset Comment Input
    this.commentForm.reset();
    const date = await Date.now();
    console.log('Posting comment');

    await this.posts.comment(
      this.postID,
      date,
      this.userFullName,
      this.userEmail,
      comment
    );

    await this.posts.getPostInfo(this.postID).subscribe(
      post => {
        for (let postComments of post['comments']) {
          postComments.date = formatDistanceToNow( new Date(postComments.date), {
            includeSeconds: true,
            addSuffix: true
          });
         }
        this.posts.commentsSubject$.next(post['comments'].reverse());
      });

    const toast = this.toast.create({
      message: 'Your comment has been added.',
      duration: 1500
    });

    toast.then(toast => toast.present());
  }

  async upVotePost() {
    await console.log('Upvoting Post');
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
    await this.downVotePostToast();
  }

  async downVotePostToast() {
    const downVotePostToast = await this.toast.create({
      cssClass: 'downvoted-toast',
      message: 'You have DOWNVOTED this post.',
      duration: 2000
    });
    downVotePostToast.present();
  }

  async upVoteComment(comment) {
    await console.log('Upvoting Comment');
    await console.log(comment);
    await this.upVoteCommentToast();
  }

  async upVoteCommentToast() {
    const upVoteCommentToast = await this.toast.create({
      cssClass: 'upvoted-toast',
      message: 'You have UPVOTED this comment.',
      duration: 2000
    });
    upVoteCommentToast.present();
  }

  async downVoteComment() {
    await console.log('Downvoting Comment');
    await this.downVoteCommentToast();
  }

  async downVoteCommentToast() {
    const upVoteCommentToast = await this.toast.create({
      cssClass: 'downvoted-toast',
      message: 'You have DOWNVOTED this comment.',
      duration: 2000
    });
    upVoteCommentToast.present();
  }


  // async report(commentID) {
  //   await console.log(commentID);
  //   await console.log('Attemping to report comment');
  //   await this.reportModal();
  // }

  // async reportModal() {
  //   const reportAlertConfig = await this.modal.create({
  //   component: ReportModalPage,
  //   componentProps: {
  //     reportedName: 'Tracy Liu',
  //     reportedComment: 'This is a reported Comment',
  //     commentDate: 'December 10th, 2019'
  //   }
  //   });

  //   await reportAlertConfig.present();
  // }

  // async reply(commentID) {
  //   await console.log(commentID);
  //   await console.log('Attemping to reply to comment');
  //   await this.replyModal();
  // }

  // async replyModal() {
  //   const replayAlertConfig = await this.modal.create({
  //   component: ReplyModalPage,
  //   componentProps: {
  //     'firstName': 'Douglas',
  //     'lastName': 'Adams',
  //     'middleInitial': 'N'
  //   }
  //   });

  //   await replayAlertConfig.present();
  // }

  async doRefresh(event) {
    this.posts.getPostInfo(this.postID).subscribe(
      post =>  {

        for (const comment of post['comments']) {
          comment.date = formatDistanceToNow( new Date(comment.date), {
            includeSeconds: true,
            addSuffix: true
          });
         }

        this.posts.commentsSubject$.next(post['comments'].reverse());
        this.post = post['post'];
      }
    );

    await setTimeout(() => {
      const toast = this.toast.create({
        message: 'Page has been refreshed',
        duration: 3000
      });
      event.target.complete();
      toast.then(toast => toast.present());
    }, 2000);
  }

}
