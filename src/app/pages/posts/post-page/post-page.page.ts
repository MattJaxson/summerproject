import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, IonContent, IonFab } from '@ionic/angular';
import { formatDistanceToNow } from 'date-fns';



@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.page.html',
  styleUrls: ['./post-page.page.scss'],
})
export class PostPagePage implements OnInit {

  @ViewChild(IonContent, {static: true}) content: IonContent;
  @ViewChild('ion-fab', {static: true}) fab: IonFab;
  commentForm: FormGroup;

  userEmail;
  userFullName;
  showFab = false;

  postID;
  creatorName;
  creatorEmail;
  date;
  followers;
  comments;
  post;

  // debugging
  scroll = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private posts: PostsService,
    private profile: ProfileService,
    private formBuilder: FormBuilder,
    private toast: ToastController) { }

  ngOnInit() {

    // Get the user's information to insert into the comment metadata
    this.profile.getUserDetails().subscribe(
      details => {
        this.userEmail = details['email'];
        this.userFullName = details['fullName'];
      }
    );

    // To collect comment data
    this.commentForm = this.formBuilder.group({
      comment: ['']
    });

    this.commentForm.controls.comment.valueChanges.subscribe(data => {

      if (data === '') {
      console.log('Value is empty');
      this.commentForm.markAsPristine();
      }

      console.log(this.commentForm);
    });

    // Get Post ID from navigation params on the main posts tab
    const id  = this.activatedRoute.snapshot.paramMap.get('_id');
    this.postID = id;

    // Get information about selected post.
    // Format its date on the front end
    // initiate this components post metadata from data in Posts Service
    this.posts.getPostInfo(this.postID).subscribe(
      post =>  {
        console.log(post);
        // tslint:disable-next-line: no-string-literal
        this.creatorName = post['creatorName'];
        this.date = formatDistanceToNow(
          new Date(post['date']), {
            includeSeconds: true,
            addSuffix: true
          });

        console.log('Date: ' + this.date);

        this.followers = post['followers'];
        console.log(post['comments']);

        for (const comment of post['comments']) {
          comment.date = formatDistanceToNow( new Date(comment.date), {
            includeSeconds: true,
            addSuffix: true
          });
         }

        this.posts.commentsSubject$.next(post['comments'].reverse());
        this.post = post['post'];
      }
    );

    // Subscribe to comments Behavior subject for live upates, specifically when the user posts a comment on the UI.
    this.posts.commentsSubject$.subscribe(commentsFromSub => {
      this.comments = commentsFromSub;
    });

  }

  logScrolling(event) {

    // if (event.detail) {
    //   console.log('ScrollTop: ' + event.detail.scrollTop);
    //   console.log('Y: ' + event.detail.currentY);
    //   console.log('Event Details: ' + event.detail);
    // }

    if (event.detail.currentY >= 480) {
      this.showFab = true;
    }

    if (event.detail.currentY <= 480) {
      this.showFab = false;
    }

  }
  ScrollToTop() {
    this.content.scrollToTop(1500);
  }

  async comment(comment) {

    // Reset Comment Input
    this.commentForm.reset();
    const date = await Date.now();
    console.log('Posting comment');

    await this.posts.comment(
      this.postID,
      date,
      this.userFullName,
      this.userEmail,
      comment
    );

    await this.posts.getPostInfo(this.postID).subscribe(
      post => {
        for (let postComments of post['comments']) {
          postComments.date = formatDistanceToNow( new Date(postComments.date), {
            includeSeconds: true,
            addSuffix: true
          });
         }
        this.posts.commentsSubject$.next(post['comments'].reverse());
      });

    const toast = this.toast.create({
      message: 'Your comment has been added.',
      duration: 1500
    });

    toast.then(toast => toast.present());
  }

  async report(comment) {
    console.log('Attemtping to Report Comment');
  }

  async doRefresh(event) {
    this.posts.getPostInfo(this.postID).subscribe(
      post =>  {

        for (const comment of post['comments']) {
          comment.date = formatDistanceToNow( new Date(comment.date), {
            includeSeconds: true,
            addSuffix: true
          });
         }

        this.posts.commentsSubject$.next(post['comments'].reverse());
        this.post = post['post'];
      }
    );

    await setTimeout(() => {
      const toast = this.toast.create({
        message: 'Page has been refreshed',
        duration: 3000
      });
      event.target.complete();
      toast.then(toast => toast.present());
    }, 2000);
  }

}
