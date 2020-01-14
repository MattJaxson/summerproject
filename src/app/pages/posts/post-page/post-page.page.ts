import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';


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
    private formBuilder: FormBuilder) { }

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
         this.comments = post['comments'];
         this.post = post['post'];
      }
    );
  }

  comment(comment) {

    const date = Date.now();
    console.log('Posting comment');
    this.posts.comment(
      this.postID,
      date,
      this.userFullName,
      this.userEmail,
      comment
    );
  }

}
