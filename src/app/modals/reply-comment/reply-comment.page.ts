import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavParams, LoadingController, AlertController } from '@ionic/angular';
import { PostsService } from 'src/app/services/post.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private modal: ModalController,
    private navParams: NavParams,
    private loading: LoadingController,
    private alert: AlertController,
    private posts: PostsService) {

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

    console.log(this.commentUserEmail);

  }

  async reply(reply) {
    await console.log('replying to comment...');
    await this.replyLoading();
    // tslint:disable-next-line: max-line-length
    await this.posts.replyComment(this.commentID, this.postID, reply.reply, this.userFullName, this.userEmail, this.userProfilePicture, this.commentUserFullName, this.commentUserEmail)
      .subscribe();
  }

  async replyLoading() {
    const loading = await this.loading.create({
      message: 'Replying to Comment...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    await this.modal.dismiss();
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

  cancel () {
    console.log('cancelling comment...');
    this.modal.dismiss();
  }

}
