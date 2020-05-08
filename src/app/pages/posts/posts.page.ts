import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PostsService } from '../../services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastController } from '@ionic/angular';
import { formatDistanceToNow } from 'date-fns';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-posts',
  templateUrl: 'posts.page.html',
  styleUrls: ['posts.page.scss']
})
export class PostsPage implements OnInit {

  commentForm: FormGroup;
  allPosts;
  followedPostLength;
  userEmail;
  userFullName;
  date;

  constructor(
  private router: Router,
  public posts: PostsService,
  private profile: ProfileService,
  private toast: ToastController,
  private formBuilder: FormBuilder
  ) {}

  ngOnInit() {

    // Get all for post for this section
    this.posts.getPosts().subscribe(
      posts => {
        this.allPosts =  Object.values(posts).reverse();

        for (const post of this.allPosts) {
          post.date = formatDistanceToNow( new Date(post.date), {
            includeSeconds: true,
            addSuffix: true
          });
        }
        this.posts.commentsSubject$.subscribe(
          comments => {
            this.allPosts.comments = comments;
          }
        );
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


    // Get the User's details
    this.profile.getUserDetails().subscribe(
      details => {
        this.userEmail = details['email'];
        this.userFullName = details['fullName'];
        this.followedPostLength = Object.values(details['followedPost']).length;
        console.log('User email: ' + this.userEmail);
      });
  }

  postPage(post) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/posts/post-page', post._id]);
  }

  async follow() {
    await console.log('Upvoting');
    await this.followToast();
  }

  async followToast() {
    const followToast = await this.toast.create({
      cssClass: 'followed-toast',
      message: 'You are FOLLOWING this post',
      duration: 2000
    });
    followToast.present();
  }

  async unFollowToast() {
    const unFollowToast = await this.toast.create({
      cssClass: 'unfollowed-toast',
      message: 'You are UNFOLLOWING this post',
      duration: 2000
    });
    unFollowToast.present();
  }

  async upVotePost(postID) {
    await console.log('Upvoting');
    await this.posts.upVotePost(postID, this.userEmail);
    await this.upVotePostToast();
  }

  async upVotePostToast() {
    const upVotePostToast = await this.toast.create({
      cssClass: 'upvoted-toast',
      message: 'You have UPVOTED this post.',
      duration: 2000
    });
    upVotePostToast.present();
  }

  async downVotePost(postID) {
    await console.log('Downvoting');
    await this.posts.downVotePost(postID, this.userEmail);
    await this.downVoteToast();
  }

  async downVoteToast() {
    const upVoteToast = await this.toast.create({
      cssClass: 'downvoted-toast',
      message: 'You have DOWNVOTED this post.',
      duration: 2000
    });
    upVoteToast.present();
  }

  async doRefresh(event) {
    await this.posts.getPosts().subscribe( jobs => {
      this.allPosts = Object.values(jobs).reverse();
      console.log(this.allPosts);

      for (const post of this.allPosts) {
        post.date = formatDistanceToNow( new Date(post.date), {
          includeSeconds: true,
          addSuffix: true
        });
      }
    });

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
