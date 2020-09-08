import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModalController, NavParams, LoadingController, AlertController} from '@ionic/angular';
import { PostsService } from 'src/app/services/post.service';

@Component({
  selector: 'app-report-comment',
  templateUrl: './report-comment.page.html',
  styleUrls: ['./report-comment.page.scss'],
})
export class ReportCommentPage implements OnInit {
  reportCommentForm: FormGroup;
  commentContents: string;
  commentUserFullName: string;
  commentUserEmail: string;
  commentID: string;
  commentDate: string;
  post: string;
  postID: string;
  userEmail: string;
  userFullName: string;
  reportReason: string;


  constructor(
    private formBuilder: FormBuilder,
    private modal: ModalController,
    private navParams: NavParams,
    private loading: LoadingController,
    private posts: PostsService,
    private alert: AlertController) {


    }


  ngOnInit() {
    // To collect comment data
    this.reportCommentForm = this.formBuilder.group({
      reportedReason: ['']
   });

    this.commentID = this.navParams.get('commentID');
    this.commentContents = this.navParams.get('commentContents');
    this.post = this.navParams.get('post');
    this.postID = this.navParams.get('postID');
    this.commentUserFullName = this.navParams.get('commentUserFullName');
    this.commentUserEmail = this.navParams.get('commentUserEmail');
    this.commentDate = this.navParams.get('commentDate');
    this.userEmail = this.navParams.get('userEmail');
    this.userFullName = this.navParams.get('userFullName');
  }

  async report() {
    await console.log('reporting comment...');
    await console.log(this.reportCommentForm.value.reportedReason);
    await this.reportLoading();
    // tslint:disable-next-line: max-line-length
    await this.posts.reportComment(this.commentID, this.commentContents, this.post, this.postID, this.commentUserFullName, this.commentUserEmail, this.commentDate, this.userEmail, this.userFullName, this.reportCommentForm.value.reportedReason )
      .subscribe();
  }

  async reportLoading() {
    const loading = await this.loading.create({
      message: 'Reporting comment...',
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
      header: 'Report Sent',
      cssClass: 'success-alert',
      message: 'Thank you for reporting this user. Find Your Future will notifiy the user and take futher actions if necessary.',
      buttons: ['OK']
    });

    await alert.present();
  }


  cancel() {
    console.log('cancelling comment...');
    this.modal.dismiss();
  }

}
