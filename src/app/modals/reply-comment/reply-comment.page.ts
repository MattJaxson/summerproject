import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavParams, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-reply-post',
  templateUrl: './reply-comment.page.html',
  styleUrls: ['./reply-comment.page.scss'],
})
export class ReplyCommentPage implements OnInit {
  replyCommentForm: FormGroup;
  commentContents;
  userFullName;
  commentID: string;
  date;


  constructor(
    private formBuilder: FormBuilder,
    private modal: ModalController,
    navParams: NavParams,
    private loading: LoadingController) {

      this.commentID = navParams.get('commentID');
      this.commentContents = navParams.get('commentContents');
      this.userFullName = navParams.get('userFullName');
      this.date = navParams.get('date');
    }

  ngOnInit() {
    // To collect comment data
    this.replyCommentForm = this.formBuilder.group({
     reply: ['']
   });

  }

  async reply() {
    await console.log('replying to comment...');
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
    console.log('Loading dismissed!');
  }

  cancel () {
    console.log('cancelling comment...');
    this.modal.dismiss();
  }

}
