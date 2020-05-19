import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavParams, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.page.html',
  styleUrls: ['./edit-comment.page.scss'],
})
export class EditCommentPage implements OnInit {
  editCommentForm: FormGroup;
  commentContents;
  userFullName;
  commentID: string;
  date;

  constructor(
    private formBuilder: FormBuilder,
    private modal: ModalController,
    navParams: NavParams,
    private loading: LoadingController
  ) {
      this.commentID = navParams.get('commentID');
      this.commentContents = navParams.get('commentCotents');
      this.userFullName = navParams.get('userFullName');
      this.date = navParams.get('date');
    }

  ngOnInit() {
     // To collect comment data
     this.editCommentForm = this.formBuilder.group({
      comment: this.commentContents
    });

  }

  cancel() {
    console.log('cancelling');
    this.modal.dismiss();
  }

  async edit() {
    await console.log('editting');
    await this.editLoading();
  }

  async editLoading() {
    const loading = await this.loading.create({
      message: 'Editing your comment...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    await this.modal.dismiss();
    console.log('Loading dismissed!');
  }

}
