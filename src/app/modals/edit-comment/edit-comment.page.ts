import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavParams, LoadingController, AlertController } from '@ionic/angular';
import { PostsService } from 'src/app/services/post.service';
import { PostPageEmitterService } from 'src/app/emitters/post-page-emitter.service';


@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.page.html',
  styleUrls: ['./edit-comment.page.scss'],
})
export class EditCommentPage implements OnInit {
  editCommentForm: FormGroup;
  postID: string;
  commentContents: string;
  commentID: string;

  constructor(
    private formBuilder: FormBuilder,
    private modal: ModalController,
    private navParams: NavParams,
    private loading: LoadingController,
    private posts: PostsService,
    private alert: AlertController,
    private postEmitterService: PostPageEmitterService
  ) {
    }

  ngOnInit() {

     this.commentID = this.navParams.get('commentID');
     this.postID = this.navParams.get('postID');
     this.commentContents = this.navParams.get('commentCotents');

     // To collect comment data
     this.editCommentForm = this.formBuilder.group({
      newComment: this.commentContents
    });

     console.log(this.commentID);
     console.log(this.postID);

  }

  cancel() {
    console.log('cancelling');
    this.modal.dismiss();
  }

  refreshComment() {
    this.postEmitterService.postPageRefresh();
  }

  async edit(newComment) {
    await console.log('editting');
    await this.posts.editComment(this.commentID, this.postID, newComment.newComment).subscribe();
    await this.editLoading();
    await this.refreshComment();
  }

  async editLoading() {
    const loading = await this.loading.create({
      message: 'Editing your comment...',
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
      message: 'Your comment has been edited.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
