import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModalController, NavParams, LoadingController, AlertController, IonContent, IonTextarea, PopoverController} from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';
import { PostsService } from 'src/app/services/post.service';
import { formatDistanceToNow } from 'date-fns';
import { BehaviorSubject } from 'rxjs';
import { PostPageEmitterService } from 'src/app/emitters/post-page-emitter.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { ReplyOptionsPopoverComponent } from 'src/app/components/reply-options-popover/reply-options-popover.component';

@Component({
  selector: 'app-replies-page',
  templateUrl: './replies-page.page.html',
  styleUrls: ['./replies-page.page.scss'],
})
export class RepliesPagePage implements OnInit {

  @ViewChild(IonContent, {static: true}) content: IonContent;
  @ViewChild('replyTextArea', {static: true}) replyTextArea: IonTextarea;

  repliesForm: FormGroup;
  replies$ = new BehaviorSubject([]);
  replies;
  replyValue;

  postID: string;
  commentContents: string;
  commentID: any;
  commentUserFullName: string;
  commentUserEmail: string;
  commentDate: string;
  commentUserProfilePicture: string;

  userFullName: string;
  userEmail: string;

  tabBar = document.getElementById('myTabBar');
  votes = document.getElementById('votes');

  constructor(
    private formBuilder: FormBuilder,
    private modal: ModalController,
    private popover: PopoverController,
    private navParams: NavParams,
    private loading: LoadingController,
    private profile: ProfileService,
    private posts: PostsService,
    private alert: AlertController,
    private postEmitterService: PostPageEmitterService,
    private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.profile.getUserDetails().subscribe(details => {
      this.commentUserProfilePicture = details['profilePicture'];
    })

     // To collect comment data
    this.repliesForm = this.formBuilder.group({
      reply: ['']
    });

    this.replies$.next(this.navParams.get('replies').reverse());
    this.replies$.subscribe(data => {
      this.replies = data;
      for (let reply of this.replies) {
        reply.isEditable = false;
        // console.log('Reply: ', reply);
        if (reply.userEmail == this.userEmail) {
          reply.isEditable = true;
        }
      }
    });

    this.postID = this.navParams.get('postID');
    this.commentContents = this.navParams.get('comment');
    this.commentID = this.navParams.get('commentID');
    this.commentUserFullName = this.navParams.get('commentUserFullName');
    this.commentUserEmail = this.navParams.get('commentUserEmail');
    this.commentDate = this.navParams.get('commentDate');


    this.userFullName = this.navParams.get('userFullName');
    this.userEmail = this.navParams.get('userEmail');
    this.commentUserProfilePicture = this.navParams.get('userProfilePicture');

  }

  cancel() {
    console.log('cancelling comment...');
    this.modal.dismiss();
  }
  refreshRepliesAmount() {
    this.postEmitterService.postPageRefresh();
  }
  async reply(reply) {
    // Reset Comment Input
    await this.repliesForm.reset();
    await console.log('replying to comment...');
    // tslint:disable-next-line: max-line-length
    await this.posts.replyComment(this.commentID, this.postID, reply, this.userFullName, this.userEmail, this.commentUserProfilePicture, this.commentUserFullName, this.commentUserEmail)
      .subscribe(
        data => {
          let currentComment;
          let currentCommentReplies = [];

          for (const comment of data['comments']) {
            if (comment._id == data['comment']) {
              currentComment = comment;
              for (let i = 0; i < comment.replies.length; i++) {
                currentCommentReplies.push(comment.replies[i]);
              }
            }
          }

          let comments = data['comments'];
          let userEmail = data['userEmail'];
          let replies = data['replies'];

          // Give User ability to Edit, Delete, or Report a Comment.
            // User cannot Report their own comment **
          for (const comment of comments) {

              // If the Logged in User's Email equals the creatorEmail of the Comment,
              // they will be given the ability to edit and delete their Comment.
              // The ability for them to report their own comment is disabled

              comment.repliesLength = comment.replies.length;
              comment.isUser = false;
              comment.canDeleteComment = false;
              comment.canReport = true;
              comment.date = formatDistanceToNow( new Date(comment.date), {
                includeSeconds: false,
                addSuffix: false
              });

              // If this comment is the logged in user, they can delete and edit
              if (comment.userEmail === userEmail) {
                comment.isUser = true;
                comment.canDeleteComment = true;
                comment.canReport = false;
              }

              // Format the Reply Dates
              for (let i = 0; comment.replies.length > i; i++) {
                comment.replies[i].date = formatDistanceToNow( new Date(comment.replies[i].date), {
                  addSuffix: false
                });
                replies.push(comment.replies[i]);
             }
           }

          this.replies = currentCommentReplies;
          currentCommentReplies.reverse();


          this.posts.commentsSubject$.next(comments.reverse());
          this.replies$.next(this.replies.reverse());
          console.log('From replyComment');

          console.log(data);
          // tslint:disable-next-line: max-line-length
          this.notificationsService.replyNotification(this.userEmail, this.commentUserEmail, this.postID, currentComment, data['newReply']).subscribe();
          console.log(this.replyTextArea.value);
          this.replyTextArea.value = undefined;
        }
      );

    await this.repliesLoading();
  }
  async deleteReply(replyID) {
    console.log('Deleting reply with id ', replyID);
    await this.posts.deleteReply(replyID, this.commentID, this.postID).subscribe( data => {
      console.log(data);
      let currentComment;
      let currentCommentReplies = [];

      let comments = data['comments'];
      let userEmail = data['userEmail'];
      let replies = data['replies'];

      for (const comment of comments) {
        if (comment._id == data['comment']) {
          currentComment = comment
          for (let i = 0; i < comment.replies.length; i++) {
            currentCommentReplies.push(comment.replies[i]);
          }
        }
      }

      for (const comment of comments) {

        comment.repliesLength = comment.replies.length;
        comment.isUser = false;
        comment.canDeleteComment = false;
        comment.canReport = true;
        comment.date = formatDistanceToNow(new Date(comment.date), {
          includeSeconds: false,
          addSuffix: false
        });

        // If the comment was posted by the current user, it becomes editable
        if (comment.userEmail == userEmail) {
          comment.isUser = true;
          comment.canDeleteComment = true;
          comment.canReport = false;
        }

        // Format the Reply Dates
        for (let i = 0; comment.replies.length > i; i++) {
          comment.replies[i].date = formatDistanceToNow( new Date(comment.replies[i].date), {
            addSuffix: false
          });
          replies.push(comment.replies[i]);
        }
      }

      this.replies = currentCommentReplies;

      this.posts.commentsSubject$.next(comments.reverse());
      this.replies$.next(this.replies.reverse());
    });
  }
  async repliesLoading() {
    const loading = await this.loading.create({
      message: 'Replying to Comment...',
      duration: 2000
    });

    await this.refreshRepliesAmount();
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    // await this.modal.dismiss();
    // await this.confirmAlert();
    console.log('Loading dismissed!');
  }
  async confirmAlert() {
    const alert = await this.alert.create({
      cssClass: 'success-alert',
      message: 'Your comment has been edited.',
      buttons: ['OK']
    });
    await alert.present();
  }
  // When the user submits the comment, the tabar will show up again
  ScrollToReply() {
    let scrollHeight = document.documentElement.scrollHeight;
    console.log(this.content.getScrollElement().then(
      data => this.content.scrollToPoint(0, data.scrollHeight, 100)))
  }
  replyContent(e) {
    console.log(e);
    this.replyValue = e.detail.value;
  }
  async optionsPopover(ev: any) {
    const popover = await this.popover.create({
      component: ReplyOptionsPopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
