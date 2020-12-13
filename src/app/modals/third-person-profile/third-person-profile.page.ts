import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController } from '@ionic/angular';
import { format } from 'date-fns';
import { ProfileService } from 'src/app/services/profile.service';
import { formatDistanceToNow } from 'date-fns';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PostsService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-person-profile',
  templateUrl: './third-person-profile.page.html',
  styleUrls: ['./third-person-profile.page.scss'],
})
export class ThirdPersonProfilePage implements OnInit {

  commentForm: FormGroup;
  userProfilePicture;
  creatorEmail: string;
  creatorName: string;
  allTheirPosts = [];
  profilePicture: any;
  userFullName: any;
  userEmail: any;
  resume: any;
  about: any;
  gender: any;
  dob: any;
  grade: any;

  constructor(
    private navParams: NavParams,
    private modal: ModalController,
    private profile: ProfileService,
    private formBuilder: FormBuilder,
    private posts: PostsService,
    private toast: ToastController,
    private router: Router,
    ) { }

  ngOnInit() {
    this.creatorEmail = this.navParams.get('creatorEmail');
    this.creatorName = this.navParams.get('creatorName');

    this.theirPosts(this.creatorEmail);

     // To collect comment data
    this.commentForm = this.formBuilder.group({
      comment: ['']
    });
  }

  cancel() {
    console.log('cancelling comment...');
    this.modal.dismiss();
  }

  theirPosts(email) {
    this.profile.getTheirDetails(email)
    .subscribe(
      details => {
        console.log('This is their posts: ');
        console.log(details);
        this.profilePicture = details['profilePicture'];
        this.resume = details['resume'];
        this.about = details['about'];
        this.gender = details['gender'];
        this.dob = format( new Date(details['dob']), 'MMMM do, yyyy');
        this.grade = details['grade'];
        this.allTheirPosts = Object.values(details['posts']).reverse();

        for (const post of this.allTheirPosts) {
          post.date = format( new Date(post.date), 'MMMM do, yyyy');
        }

        return this.allTheirPosts;
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
      this.profilePicture,
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
