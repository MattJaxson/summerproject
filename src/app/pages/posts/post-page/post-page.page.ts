import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// tslint:disable-next-line: max-line-length
import { ToastController, AlertController, ModalController, IonContent, IonFab, IonTabs, LoadingController, IonTextarea } from '@ionic/angular';
import { formatDistanceToNow } from 'date-fns';
import { ReplyCommentPage } from 'src/app/modals/reply-comment/reply-comment.page';
import { ReportCommentPage } from 'src/app/modals/report-comment/report-comment.page';
import { EditCommentPage } from 'src/app/modals/edit-comment/edit-comment.page';
import { EditPostPage } from 'src/app/modals/edit-post/edit-post.page';
import { PostPageEmitterService } from 'src/app/emitters/post-page-emitter.service';
import { RepliesPagePage } from 'src/app/modals/replies-page/replies-page.page';
import { PlatformLocation } from '@angular/common';


@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.page.html',
  styleUrls: ['./post-page.page.scss'],
})
export class PostPagePage implements OnInit {

  @ViewChild(IonContent, {static: true}) content: IonContent;
  @ViewChild(IonTextarea, {static: true}) textarea: IonTextarea;

  tabBar = document.getElementById('myTabBar');
  votes = document.getElementById('votes');

  userEmail: string;
  userFullName: string;
  userProfilePicture: string;
  showFab = false;
  following = false;
  isUser = false;


  post;
  comments;
  followers: [];
  date: string;
  creatorEmail: string;
  creatorName: string;
  creatorProfilePicture: string;
  commentID: string;
  postID: string;

  // debugging
  scroll = '';
  commentForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postEmitterService: PostPageEmitterService,
    private router: Router,
    private posts: PostsService,
    private profile: ProfileService,
    private formBuilder: FormBuilder,
    private toast: ToastController,
    private modal: ModalController,
    private alert: AlertController,
    private loading: LoadingController,
    private location: PlatformLocation
    ) { }

  ngOnInit() {

    this.location.onPopState(() => {
      this.postEmitterService.onBackAction();
    });

    // Get Post ID from navigation params on the main posts tab
    const id  = this.activatedRoute.snapshot.paramMap.get('_id');
    this.postID = id;

    // Get the user's information to insert into the comment metadata
    this.getPostInfo();

    if (this.postEmitterService.subsVar == undefined) {

      // For Comment and Reply Refreshes
      this.postEmitterService.subsVar = this.postEmitterService.invokePostsPageRefresh.subscribe(() => {
        this.getPostInfo();
        console.log('Refreshing Post-Page-Page');
      });

    }

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


    // Subscribe to comments Behavior subject for live upates, specifically when the user posts a comment on the UI.
    this.posts.commentsSubject$.subscribe(commentsFromSub => {
      this.comments = commentsFromSub;
    });

    this.posts.postsSubject$.subscribe(posts => {
      let currentPost;
      for (const post of posts) {
        if (post._id == this.postID) {
          currentPost = post;
        }
      }
      this.post = currentPost.post;
    });
  }

  back() {
    this.postEmitterService.onBackAction();
    this.router.navigate(['/home/posts']);
  }

  refreshAfterComment() {
    this.postEmitterService.postPageRefresh();
  }

  refreshAfterDelete() {
    this.postEmitterService.postPageRefresh();
  }

  refreshAfterFollow() {
    this.postEmitterService.postPageRefresh();
  }


  async follow(postID) {
    await console.log('Following Post');
    await console.log(postID);
    await this.posts.followPost(postID, this.userEmail);
    this.following = true;
    await this.followToast();
  }

  async followToast() {
    const followToast = await this.toast.create({
      cssClass: 'followed-toast',
      message: 'You are FOLLOWING this post',
      duration: 2000
    });
    // await this.refreshAfterFollow();
    await this.refreshAfterDelete();
    await followToast.present();
  }

  async unFollow(postID) {
    await console.log('Unfollowing Post');
    await console.log(postID);
    await this.posts.unFollowPost(postID, this.userEmail);
    this.following = false;
    await this.unFollowToast();
  }

  async unFollowToast() {
    const unFollowToast = await this.toast.create({
      cssClass: 'unfollowed-toast',
      message: 'You are UNFOLLOWING this post',
      duration: 2000
    });
    // await this.refreshAfterFollow();
    await this.refreshAfterDelete();
    await unFollowToast.present();
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

  // Hide the Tab bar when the user is attempting to make a comment
  ScrollToTop() {
    this.content.scrollToPoint(0, 200, 100);
    this.tabBar.style.height = '0px';
    this.votes.style.height = '0px';
  }

  fabScrollTop() {
    this.content.scrollToTop();
  }

  // When the user submits the comment, the tabar will show up again
  ScrollToPostedComment() {
    this.content.scrollToPoint(0, 600, 100);
    this.textarea.getInputElement()
      .then((textarea: HTMLTextAreaElement) => {
        textarea.blur();

    });
  }

  onBlur() {
    this.textarea.getInputElement()
      .then((textarea: HTMLTextAreaElement) => {
        this.tabBar.style.height = '70px';
    });
  }

  // for when the user un focuses out of the comment textarea but hasnt submitted the comment
  blur() {
    this.textarea.getInputElement()
      .then((textarea: HTMLTextAreaElement) => {
        textarea.blur();
        this.tabBar.style.height = '70px';
    });
  }


  async comment(postID, userFullName, userEmail, userProfilePicture, comment) {
    console.log(comment);

    // Reset Comment Input
    this.commentForm.reset();
    this.commentLoading(postID, userFullName, userEmail, userProfilePicture, comment);
    const toast = this.toast.create({
      message: 'Your comment has been added.',
      duration: 1500
    });

    toast.then(toast => toast.present());
  }

  async commentLoading(postID, userFullName, userEmail, userProfilePicture, comment) {

    await this.posts.comment(
      postID,
      userFullName,
      userEmail,
      userProfilePicture,
      comment
    ).subscribe( data => {
      this.posts.getPostInfo(this.postID).subscribe(
        post => {
          for (let postComments of post['comments']) {

            console.log(postComments)

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

    const loading = await this.loading.create({
      message: 'Adding Comment...',
      duration: 1000
    });
    await this.refreshAfterComment();
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  async report(commentID, commentCotents, post, postID, commentUserFullName, commentUserEmail, commentDate) {
    // Get information from comment
    await console.log('Attemping to report comment');
    // tslint:disable-next-line: max-line-length
    await this.reportModal(commentID, commentCotents, post, postID, commentUserFullName, commentUserEmail, commentDate, this.userEmail, this.userFullName);

  }

  async reportModal(commentID, commentCotents, post, postID, commentUserFullName, commentUserEmail, commentDate, userEmail, userFullName) {
    const reportModalConfig = await this.modal.create({
    component: ReportCommentPage,
    componentProps: {
      commentID,
      commentCotents,
      commentUserFullName,
      commentUserEmail,
      commentDate,
      userEmail,
      userFullName,
      post,
      postID
    }
    });

    await reportModalConfig.present();
  }

  async reply(commentID, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail) {
    await console.log('Attemping to reply to comment');
    await this.replyModal(commentID, this.postID, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail);
  }

  async replyModal(commentID, postID, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail) {
    const replyModalConfig = await this.modal.create({
      component: ReplyCommentPage,
      componentProps: {
        commentID,
        postID,
        userFullName,
        userProfilePicture,
        userEmail,
        commentUserEmail,
        commentUserFullName,
      },
      cssClass: 'reply-modal'
    });

    await replyModalConfig.present();
  }

  // tslint:disable-next-line: max-line-length
  async repliesModal(postID, replies, comment, commentID, commentUserFullName, commentUserEmail, commentDate, userProfilePicture, userFullName, userEmail) {
    const repliesPageModalConfig = await this.modal.create({
      component: RepliesPagePage,
      componentProps: {
        postID,
        replies,
        comment,
        commentID,
        commentUserFullName,
        commentUserEmail,
        commentDate,
        userProfilePicture,
        userFullName,
        userEmail
      },
      cssClass: 'reply-modal'
    });

    await repliesPageModalConfig.present();
  }

  async editComment(commentID, commentCotents, postID, userEmail) {
    await console.log(commentID);
    await console.log('Attemping to edit comment');
    await this.editCommentModal(commentID,commentCotents, postID, userEmail);
  }

  async editCommentModal(commentID, commentCotents, postID, userEmail) {
    const editAlertConfig = await this.modal.create({
    component: EditCommentPage,
    componentProps: {
      commentID,
      commentCotents,
      postID,
      userEmail
    }
    });

    await editAlertConfig.present();
  }

  async editPost(postID, post) {

    await console.log('Attemping to edit comment');
    await this.editPostModal(postID, post);
  }

  async editPostModal(postID, post) {
    const editPostModalConfig = await this.modal.create({
    component: EditPostPage,
    componentProps: {
      postID,
      post
    }
    });

    await editPostModalConfig.present();
  }

  async deleteComment(commentID) {
    console.log('deleting comment..');
    console.log(this.postID);
    console.log(commentID);
    this.deleteCommentAlert(this.postID, commentID);
  }

  async deleteCommentAlert(postID, commentID) {
    const alert = await this.alert.create({
      header: 'Are you sure you want to delete this comment? This cannot be undone.',
      cssClass: 'danger-alert',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.deleteCommentLoading(this.postID, commentID)
            .catch((err) => {
                console.log(err);
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async deleteCommentLoading(postID, commentID) {

    await this.posts.deleteComment(this.postID, commentID).subscribe(
       values  => {
        let comments = values['comments'];

        for (const comment of comments) {

          // If the Logged in User's Email equals the creatorEmail of the Comment,
          // they will be given the ability to edit and delete their Comment.
          // The ability for them to report their own comment is disabled

          comment.repliesLength = comment.replies.length;
          comment.isUser = false;
          comment.canDeleteComment = false;
          comment.canReport = true;
          comment.date = formatDistanceToNow( new Date(comment.date), {
            includeSeconds: false,
            addSuffix: false
          });

          // If this comment is the logged in user, they can delete and edit
          if (comment.userEmail === this.userEmail) {
            console.log('true');
            comment.isUser = true;
            comment.canDeleteComment = true;
            comment.canReport = false;
          }
       }

        this.posts.commentsSubject$.next(comments.reverse());
      }

    );

    const loading = await this.loading.create({
      message: 'Deleting Comment...',
      duration: 2000
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


  async deletePost(postID) {
    console.log('deleting post..');
    console.log(postID);
    this.deletePostAlert(postID);
  }

  async deletePostAlert(postID) {
    const alert = await this.alert.create({
      header: 'Are you sure you want to delete this post? This cannot be undone.',
      cssClass: 'danger-alert',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Delete',
          handler: async () => {
            await this.deletePostLoading(postID);
          }
        }
      ]
    });

    await alert.present();
  }

  async deletePostLoading(postID) {
    console.log(postID);
    await this.posts.deletePost(postID).subscribe(
      remainingPosts => {
        this.posts.postsSubject$.next(Object.values(remainingPosts).reverse());
        console.log(this.posts.postsSubject$.getValue());
      }
    );
    
    this.postEmitterService.onBackAction()
    await this.router.navigate(['/home/posts']);
    console.log('Loading dismissed!');
    
    const loading = await this.loading.create({
      message: 'Deleting Comment...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  async getPostInfo() {
   await this.profile.getUserDetails().subscribe(
      details => {
        let userEmail = details['email'];
        this.userEmail = userEmail;
        let userFullName = details['fullName'];
        let userProfilePicture = details['profilePicture'];

        // Get information about selected post.
        // Format its date on the front end
        // initiate this components post metadata from data in Posts Service
        this.posts.getPostInfo(this.postID).subscribe(
          postInfo =>  {
            const creatorEmail = postInfo['creatorEmail'];
            const creatorName = postInfo['creatorName'];
            const creatorProfilePicture = postInfo['creatorProfilePicture'];
            const post = postInfo['post'];
            const followers = postInfo['followers'];
            let comments = postInfo['comments'];
            let following = false;
            let date = formatDistanceToNow(
              new Date(postInfo['date']), {
                includeSeconds: true,
                addSuffix: false
              });

            // Check if the post creator is the same as the User
            // Enables the user to delete and edit post if true
            if (creatorEmail === this.userEmail) {
               this.isUser = true;
            }

            // See if the Logged in User is following the post on this page
            followers.find(findFollower);

            function findFollower(follower) {
              if (!follower) {
              }

              if (follower === userEmail) {
                following = true;
              }
          }

            // Give User ability to Edit, Delete, or Report a Comment.
            // User cannot Report their own comment **
            for (const comment of comments) {

              // If the Logged in User's Email equals the creatorEmail of the Comment,
              // they will be given the ability to edit and delete their Comment.
              // The ability for them to report their own comment is disabled

              comment.repliesLength = comment.replies.length;
              comment.isUser = false;
              comment.canDeleteComment = false;
              comment.canReport = true;
              comment.date = formatDistanceToNow( new Date(comment.date), {
                includeSeconds: false,
                addSuffix: false
              });

              // If this comment is the logged in user, they can delete and edit
              if (comment.userEmail === this.userEmail) {
                comment.isUser = true;
                comment.canDeleteComment = true;
                comment.canReport = false;
              }

              // Format the Reply Dates
              for (let i = 0; comment.replies.length > i; i++) {
                comment.replies[i].date = formatDistanceToNow( new Date(comment.replies[i].date), {
                  addSuffix: false
                });
             }

           }

            this.creatorName = creatorName;
            this.creatorEmail = creatorEmail;
            this.creatorProfilePicture = creatorProfilePicture;
            this.date = date;
            this.followers = followers;
            this.comments = comments.reverse();
            this.following = following;
            this.post = post;
            this.userProfilePicture = userProfilePicture;
            this.userFullName = userFullName;


          }
        );
      }
    );
  }

  async doRefresh(event) {
    this.profile.getUserDetails().subscribe(
      details => {
        let userEmail = details['email'];
        this.userEmail = userEmail;
        let userFullName = details['fullName'];
        let userProfilePicture = details['profilePicture'];

        // Get information about selected post.
        // Format its date on the front end
        // initiate this components post metadata from data in Posts Service
        this.posts.getPostInfo(this.postID).subscribe(
          postInfo =>  {
            const creatorEmail = postInfo['creatorEmail'];
            const creatorName = postInfo['creatorName'];
            const post = postInfo['post'];
            const followers = postInfo['followers'];
            let comments = postInfo['comments'];
            let following = false;
            let date = formatDistanceToNow(
              new Date(postInfo['date']), {
                includeSeconds: true,
                addSuffix: false
              });

            // See if the Logged in User is following the post on this page
            followers.find(findFollower);

            function findFollower(follower) {
              if (!follower) {
              }

              if (follower === userEmail) {
                following = true;
              }
          }

            // Give User ability to Edit, Delete, or Report a Comment.
            // User cannot Report their own comment **
            for (const comment of comments) {

              // If the Logged in User's Email equals the creatorEmail of the Comment,
              // they will be given the ability to edit and delete their Comment.
              // The ability for them to report their own comment is disabled

              comment.repliesLength = comment.replies.length;
              comment.isUser = false;
              comment.canDeleteComment = false;
              comment.canReport = true;
              comment.date = formatDistanceToNow( new Date(comment.date), {
                includeSeconds: true,
                addSuffix: false
              });

              // If this comment is the logged in user, they can delete and edit
              if (comment.userEmail === this.userEmail) {
                comment.isUser = true;
                comment.canDeleteComment = true;
                comment.canReport = false;
              }

              // Format the Reply Dates
              for (let i = 0; comment.replies.length > i; i++) {
                comment.replies[i].date = formatDistanceToNow( new Date(comment.replies[i].date), {
                  addSuffix: false
                });
             }

           }

            this.creatorName = creatorName;
            this.creatorEmail = creatorEmail;
            this.date = date;
            this.followers = followers;
            this.comments = comments;
            this.following = following;
            this.post = post;
            this.userProfilePicture = userProfilePicture;
            this.userFullName = userFullName;

            this.posts.commentsSubject$.next(comments.reverse());

          }
        );
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
