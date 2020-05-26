import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModalController, NavParams, LoadingController, AlertController, IonContent, IonTextarea} from '@ionic/angular';
import { PostsService } from 'src/app/services/post.service';
import { formatDistanceToNow } from 'date-fns';
import { BehaviorSubject } from 'rxjs';
import { PostPageEmitterService } from 'src/app/emitters/post-page-emitter.service';


@Component({
  selector: 'app-replies-page',
  templateUrl: './replies-page.page.html',
  styleUrls: ['./replies-page.page.scss'],
})
export class RepliesPagePage implements OnInit {

  @ViewChild(IonContent, {static: true}) content: IonContent;
  @ViewChild(IonTextarea, {static: true}) textarea: IonTextarea;

  repliesForm: FormGroup;
  replies$ = new BehaviorSubject([]);
  replies;

  postID: string;
  commentContents: string;
  commentID: any;
  commentUserFullName: string;
  commentUserEmail: string;
  commentDate: string;

  userFullName: string;
  userEmail: string;
  userProfilePicture: string;

  tabBar = document.getElementById('myTabBar');
  votes = document.getElementById('votes');

  constructor(
    private formBuilder: FormBuilder,
    private modal: ModalController,
    private navParams: NavParams,
    private loading: LoadingController,
    private posts: PostsService,
    private alert: AlertController,
    private postEmitterService: PostPageEmitterService) { }

  ngOnInit() {
     // To collect comment data
     this.repliesForm = this.formBuilder.group({
      reply: ['']
   });

     this.replies$.next(this.navParams.get('replies').reverse());
     this.replies$.subscribe(data => {
      this.replies = data;
     });

     this.postID = this.navParams.get('postID');
     this.commentContents = this.navParams.get('comment');
     this.commentID = this.navParams.get('commentID');
     this.commentUserFullName = this.navParams.get('commentUserFullName');
     this.commentUserEmail = this.navParams.get('commentUserEmail');
     this.commentDate = this.navParams.get('commentDate');


     this.userFullName = this.navParams.get('userFullName');
     this.userEmail = this.navParams.get('userEmail');

  }

  cancel() {
    console.log('cancelling comment...');
    this.modal.dismiss();
  }

  refreshRepliesAmount() {
    this.postEmitterService.repliesRefresh();
  }

  async reply(reply) {
    // Reset Comment Input
    await this.repliesForm.reset();
    await console.log('replying to comment...');
    // tslint:disable-next-line: max-line-length
    await this.posts.replyComment(this.commentID, this.postID, reply.reply, this.userFullName, this.userEmail, this.userProfilePicture, this.commentUserFullName, this.commentUserEmail)
      .subscribe(
        data => {
          let replies = data['replies'];
          console.log(replies);
          this.replies$.next(replies.reverse());

          // Format the Reply Dates
          for (let i = 0; replies.length > i; i++) {
            console.log(replies[i].date);
            replies[i].date = formatDistanceToNow( new Date(replies[i].date), {
              addSuffix: false
            });
         }
        }
      )

    await this.repliesLoading();
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

    // Hide the Tab bar when the user is attempting to make a comment
    ScrollToTop() {
      this.content.scrollToPoint(0, 140, 100);
      this.tabBar.style.height = '0px';
      this.votes.style.height = '0px';
    }

    // When the user submits the comment, the tabar will show up again
    ScrollToReply() {
      this.content.scrollToPoint(0, 300, 100);
      this.textarea.getInputElement()
        .then((textarea: HTMLTextAreaElement) => {
          textarea.blur();

      });
    }

    onBlur() {
      this.textarea.getInputElement()
        .then((textarea: HTMLTextAreaElement) => {
          this.tabBar.style.height = '70px';
          this.votes.style.height = '70px';
      });
    }

    // for when the user un focuses out of the comment textarea but hasnt submitted the comment
    blur() {
      this.textarea.getInputElement()
        .then((textarea: HTMLTextAreaElement) => {
          textarea.blur();
          this.tabBar.style.height = '70px';
          this.votes.style.height = '70px';
      });
    }


}
