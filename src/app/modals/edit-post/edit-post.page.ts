import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavParams, LoadingController, AlertController } from '@ionic/angular';
import { PostsService } from 'src/app/services/post.service';
import { PostPageEmitterService } from 'src/app/emitters/post-page-emitter.service';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.page.html',
  styleUrls: ['./edit-post.page.scss'],
})
export class EditPostPage implements OnInit {
  editPostForm: FormGroup;
  postID: string;
  post: string;

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

     this.postID = this.navParams.get('postID');
     this.post = this.navParams.get('post');

     console.log(this.post);

     // To collect comment data
     this.editPostForm = this.formBuilder.group({
      newPost: this.post
    });

  }

  cancel() {
    console.log('cancelling');
    this.modal.dismiss();
  }

  refreshComment() {
    this.postEmitterService.postPageRefresh();
  }

   edit(newPost) {
     console.log('editting');
     this.posts.editPost(this.postID, newPost.newPost).subscribe( post => {
      console.log(post);
      this.editLoading(post['post']);
    });
  }

  async editLoading(post) {
    const loading = await this.loading.create({
      message: 'Editing your Post...',
      duration: 1000
    });
    await loading.present();
    console.log(post.post);

    const { role, data } = await loading.onDidDismiss();

    await this.modal.dismiss();
    await this.posts.postsSubject$.next(post);
    await this.confirmAlert();
    console.log('Loading dismissed!');
  }

  async confirmAlert() {
    const alert = await this.alert.create({
      cssClass: 'success-alert',
      message: 'Your Post has been edited.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
