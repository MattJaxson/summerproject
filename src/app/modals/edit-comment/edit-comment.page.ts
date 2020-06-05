import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavParams, LoadingController, AlertController } from '@ionic/angular';
import { PostsService } from 'src/app/services/post.service';
import { PostPageEmitterService } from 'src/app/emitters/post-page-emitter.service';
import { formatDistanceToNow } from 'date-fns';


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
  userEmail: any;

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
     this.commentContents = this.navParams.get('commentCotents');
     this.postID = this.navParams.get('postID');
     this.userEmail = this.navParams.get('userEmail');

     console.log('post_id: ' + this.postID );
     console.log(this.commentID);
     console.log(this.commentContents );
     console.log(this.userEmail );

     // To collect comment data
     this.editCommentForm = this.formBuilder.group({
      newComment: this.commentContents
    });

  }

  cancel() {
    console.log('cancelling');
    this.modal.dismiss();
  }

  refreshComment() {
    this.postEmitterService.postPageRefresh();
  }

   edit(newComment) {
    console.log('editting');
    console.log(newComment);
    this.posts.editComment(this.commentID, this.postID, newComment.newComment).subscribe(comment => {

      this.posts.getPostInfo(this.postID).subscribe(
        post => {

          for (let postComments of post['comments']) {

            postComments.isUser = false;
            postComments.canDeleteComment = false;
            postComments.canReport = true;

              // If this comment is the logged in user, they can delete and edit
            if (postComments.userEmail === this.userEmail) {
                postComments.isUser = true;
                postComments.canDeleteComment = true;
                postComments.canReport = false;
              }

            postComments.repliesLength = postComments.replies.length;
            postComments.date = formatDistanceToNow( new Date(postComments.date), {
              includeSeconds: true,
              addSuffix: false
            });
           }
          this.posts.commentsSubject$.next(post['comments'].reverse());
        });
      this.editLoading(comment['newComment']);
    });
  }

  async editLoading(comment) {
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
