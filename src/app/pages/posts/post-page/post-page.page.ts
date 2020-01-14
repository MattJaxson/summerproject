import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { formatDistance, subDays } from 'date-fns';



@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.page.html',
  styleUrls: ['./post-page.page.scss'],
})
export class PostPagePage implements OnInit {

  commentForm: FormGroup;

  userEmail;
  userFullName;

  postID;
  creatorFullName;
  creatorEmail;
  date;
  followers;
  comments;
  post;

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

    // Get Post ID from navigation params on the main posts tab
    const id  = this.activatedRoute.snapshot.paramMap.get('_id');
    this.postID = id;

    // Get information about selected post.
    // Format its date on the front end
    // initiate this components post metadata from data in Posts Service
    this.posts.getPostInfo(this.postID).subscribe(
      post =>  {
        // tslint:disable-next-line: no-string-literal
         this.creatorFullName = post['creatorFullName'];
         this.date = formatDistance(
          new Date(),
          new Date(post['date']),
          { includeSeconds: true }
        );

         console.log('Date: ' + this.date);

         this.followers = post['followers'];
         this.posts.commentsSubject$.next(post['comments']);
         this.post = post['post'];
      }
    );

    // Subscribe to comments Behavior subject for live upates, specifically when the user posts a comment on the UI.
    this.posts.commentsSubject$.subscribe(commentsFromSub => {
      this.comments = commentsFromSub;
    });
  }

  async comment(comment) {

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
        this.posts.commentsSubject$.next(post['comments']);
      }
    )

    const toast = this.toast.create({
      message: 'Your comment has been added.',
      duration: 1500
    });
    toast.then(toast => toast.present());
  }

  async doRefresh(event) {
    this.posts.getPostInfo(this.postID).subscribe(
      post =>  {
         this.posts.commentsSubject$.next(post['comments']);
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
