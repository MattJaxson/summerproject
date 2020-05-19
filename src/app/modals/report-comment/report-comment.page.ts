import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModalController, NavParams, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-report-comment',
  templateUrl: './report-comment.page.html',
  styleUrls: ['./report-comment.page.scss'],
})
export class ReportCommentPage implements OnInit {
  reportCommentForm: FormGroup;
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
      this.commentContents = navParams.get('commentCotents');
      this.userFullName = navParams.get('userFullName');
      this.date = navParams.get('date');
    }


  ngOnInit() {
    // To collect comment data
    this.reportCommentForm = this.formBuilder.group({
     report: ['']
   });
  }

  async report() {
    await console.log('reporting comment...');
    await this.reportLoading();
  }

  async reportLoading() {
    const loading = await this.loading.create({
      message: 'Reporting comment...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    await this.modal.dismiss();
    console.log('Loading dismissed!');
  }


  cancel() {
    console.log('cancelling comment...');
    this.modal.dismiss();
  }

}
