import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.page.html',
  styleUrls: ['./post-page.page.scss'],
})
export class PostPagePage implements OnInit {

  commentForm: FormGroup;
  commentsSubject$ = new BehaviorSubject([]);

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


    this.commentForm = this.formBuilder.group({
      comment: ['']
    });

    const id  = this.activatedRoute.snapshot.paramMap.get('_id');
    this.postID = id;

    this.posts.getPostInfo(this.postID).subscribe(
      post =>  {
        // tslint:disable-next-line: no-string-literal
         this.creatorFullName = post['creatorFullName'];
         this.date = post['date'];
         this.followers = post['followers'];
         this.commentsSubject$.next(post['comments']);
         this.post = post['post'];
      }
    );

    this.commentsSubject$.subscribe(comments => {
      this.comments = comments;
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
        this.commentsSubject$.next(post['comments']);
      }
    )

    const toast = this.toast.create({
      message: 'Your comment has been added.',
      duration: 1500
    });
    toast.then(toast => toast.present());
  }

}
