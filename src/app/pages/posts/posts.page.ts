import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, IonRefresher, IonFabButton } from '@ionic/angular';
import { PostsService } from '../../services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastController } from '@ionic/angular';
import { formatDistanceToNow } from 'date-fns';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PostPageEmitterService } from 'src/app/emitters/post-page-emitter.service';


@Component({
  selector: 'app-posts',
  templateUrl: 'posts.page.html',
  styleUrls: ['posts.page.scss']
})
export class PostsPage implements OnInit {

  @ViewChild(IonFabButton, {static: true}) fabButton: IonFabButton;

  postsSub: Subscription;
  // postsSub: Subscription;
  commentForm: FormGroup;
  allPosts;
  followedPost;
  userEmail;
  userFullName;
  date;

  constructor(
  private router: Router,
  public posts: PostsService,
  private profile: ProfileService,
  private toast: ToastController,
  private formBuilder: FormBuilder,
  private postPageEmitter: PostPageEmitterService
    ) {}


  ngOnInit() {

    this.fabButton.size = 'small';

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

    // Get all for post for this section
    this.posts.getPosts().subscribe(
      posts => {
        let allPosts =  Object.values(posts).reverse();
        this.posts.postsSubject$.next(allPosts);
        this.posts.postsSubject$.subscribe(
            data => {
              this.allPosts = data;
            }
          );

        this.allPosts = this.posts.postsSubject$.value;

        for (const post of this.allPosts) {
          post.date = formatDistanceToNow( new Date(post.date), {
            includeSeconds: true,
            addSuffix: true
          });
        }
        this.posts.commentsSubject$.next(this.allPosts);
        this.posts.commentsSubject$.subscribe(
          comments => {
            this.allPosts.comments = comments;
          }
        );
        // Get the User's details
        this.profile.getUserDetails().subscribe(
          details => {
            this.userEmail = details['email'];
            this.userFullName = details['fullName'];
            this.followedPost = Object.values(details['followedPost']).length;
            console.log('User email: ' + this.userEmail);
          });
      }
    );
  }

    postPage(post) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/posts/post-page', post._id]);
  }

  async doRefresh(event) {
    await this.posts.getPosts().subscribe( jobs => {
      this.allPosts = Object.values(jobs).reverse();

      for (const post of this.allPosts) {
        post.date = formatDistanceToNow( new Date(post.date), {
          includeSeconds: true,
          addSuffix: true
        });
      }
    });

    // Present Toast
    await setTimeout(() => {
      const toast = this.toast.create({
        message: 'Inspiration Page has been refreshed',
        duration: 3000
      });
      event.target.complete();
      toast.then(toast => toast.present());
    }, 2000);
  }


    addPost() {
    this.router.navigate(['/home/posts/add-post']);
  }

    following() {
    this.router.navigate(['/home/posts/following']);
  }

  async comment(comment, postID) {

    // Reset Comment Input
    this.commentForm.reset();
    const date = await Date.now();
    console.log('Posting comment');
    console.log('Post ID: ' + postID);

    await this.posts.comment(
      postID,
      date,
      this.userFullName,
      this.userEmail,
      comment
    );

    await this.posts.getPostInfo(postID).subscribe(
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

    await this.router.navigate(['/home/posts/post-page', postID]);
  }


}
