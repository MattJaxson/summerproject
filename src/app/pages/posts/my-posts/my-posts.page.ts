import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from '../../../services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastController, ModalController } from '@ionic/angular';
import { format } from 'date-fns';
import { formatDistanceToNow } from 'date-fns';
import { FollowIconComponent } from '../../../components/follow-icon/follow-icon.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostPageEmitterService } from 'src/app/emitters/post-page-emitter.service';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.page.html',
  styleUrls: ['./my-posts.page.scss'],
})
export class MyPostsPage implements OnInit {

  commentForm: FormGroup;
  userEmail;
  allMyPosts = [];
  userFullName: any;
  userID: any;
  userProfilePicture: any;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public posts: PostsService,
    private profile: ProfileService,
    private toast: ToastController,
    private formBuilder: FormBuilder,
    private eventEmitterService: PostPageEmitterService,
    private modal: ModalController,
    private location: PlatformLocation) { }

  ngOnInit() {
    this.location.onPopState(() => {
      this.eventEmitterService.onBackAction();
    });

    this.profile.getUserDetails().subscribe(
      details => {
        this.userID = details['_id'];
        this.userFullName = details['fullName'];
        this.userEmail = details['email'];
        this.userProfilePicture = details['profilePicture'];

      });

      // To collect comment data
    this.commentForm = this.formBuilder.group({
      comment: ['']
    });


    const email = this.activatedRoute.snapshot.paramMap.get('email');
    this.userEmail = email;
    console.log(this.userEmail);

    this.myPosts(this.userEmail);
  }

  addPost() {
    this.router.navigate(['/home/posts/add-post']);
  }

  back() {
    this.eventEmitterService.onBackAction();
    this.router.navigate(['/home/posts']);
  }

  myPosts(userEmail) {
    this.posts.getMyPosts(userEmail).subscribe(
      data => {
        this.allMyPosts = Object.values(data).reverse();
        console.log(data);

        for (const post of this.allMyPosts) {
          post.date = format( new Date(post.date), 'MMMM do, yyyy');
        }

        return this.allMyPosts;
      }
    );
  }

  async comment(postID, userFullName, userEmail, userProfilePicture, comment) {

    // Reset Comment Input
    this.commentForm.reset();
    const date = await Date.now();
    console.log('Posting comment');
    console.log('Post ID: ' + postID);

    await this.posts.comment(
      postID,
      this.userFullName,
      this.userEmail,
      this.userProfilePicture,
      comment
    ).subscribe(
      () => {this.posts.getPostInfo(postID).subscribe(
        post => {
          this.posts.getPostInfo(postID).subscribe(
           post => {
             for (let postComments of post['comments']) {

               console.log(postComments);

               postComments.isUser = false;
               postComments.canDeleteComment = false;
               postComments.canReport = true;

                 // If this comment is from the logged in user, they can delete and edit
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
        });
      }
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
      }
    );

    const toast = this.toast.create({
      message: 'Your comment has been added.',
      duration: 1500
    });

    toast.then(toast => toast.present());

    await this.router.navigate(['/home/posts/post-page', postID]);
  }

}
