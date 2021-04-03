import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavParams, LoadingController, AlertController } from '@ionic/angular';
import { PostsService } from 'src/app/services/post.service';
import { PostPageEmitterService } from 'src/app/emitters/post-page-emitter.service';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

@Component({
  selector: 'app-reply-post',
  templateUrl: './reply-comment.page.html',
  styleUrls: ['./reply-comment.page.scss'],
})
export class ReplyCommentPage implements OnInit {
  replyCommentForm: FormGroup;
  postID: string;
  userProfilePicture: string;
  userEmail: string;
  userFullName: string;
  commentID: string;
  commentUserFullName: string;
  commentUserEmail: string;
  comment: any;

  constructor(
    private formBuilder: FormBuilder,
    private modal: ModalController,
    private navParams: NavParams,
    private loading: LoadingController,
    private alert: AlertController,
    private posts: PostsService,
    private postEmitterService: PostPageEmitterService) {

    }

  ngOnInit() {
    // To collect comment data
    this.replyCommentForm = this.formBuilder.group({
     reply: ['']
   });

    this.commentID = this.navParams.get('commentID');
    this.postID = this.navParams.get('postID');
    this.userFullName = this.navParams.get('userFullName');
    this.userEmail = this.navParams.get('userEmail');
    this.userProfilePicture = this.navParams.get('userProfilePicture');
    this.commentUserFullName = this.navParams.get('commentUserFullName');
    this.commentUserEmail = this.navParams.get('commentUserEmail');
    this.comment = this.navParams.get('comment');

    console.log(this.commentUserEmail);
    console.log(this.userEmail)

  }

  async reply(reply) {
    await console.log('replying to comment...');
    // tslint:disable-next-line: max-line-length
    await this.posts.replyComment(this.commentID, this.postID, reply.reply, this.userFullName, this.userEmail, this.userProfilePicture, this.commentUserFullName, this.commentUserEmail)
      .subscribe(
        data => {
          console.log(data);
          let comments = data['comments'];
          let userEmail = data['userEmail'];
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
             }

           }
          this.posts.commentsSubject$.next(comments.reverse());
        }
      );
    await this.replyLoading();
  }

  async replyLoading() {
    const loading = await this.loading.create({
      message: 'Replying to Comment...',
      duration: 2000
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    await this.modal.dismiss();
    await this.confirmAlert();
    console.log('Loading dismissed!');
  }

  async confirmAlert() {
    const alert = await this.alert.create({
      cssClass: 'success-alert',
      message: 'Your comment has been added.',
      buttons: ['OK']
    });

    await alert.present();
  }

  cancel () {
    console.log('cancelling reply...');
    this.modal.dismiss();
  }

}
