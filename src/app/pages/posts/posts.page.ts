import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IonFabButton, IonSearchbar, ModalController } from '@ionic/angular';
import { PostsService } from '../../services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { formatDistanceToNow } from 'date-fns';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PostPageEmitterService } from 'src/app/emitters/post-page-emitter.service';
import { StudentChatService } from 'src/app/services/student-chat.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { Subscription } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-posts',
  templateUrl: 'posts.page.html',
  styleUrls: ['posts.page.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(':leave', [
          animate('0.8s ease-out', style({ transform: 'translateX(100px)' }))
        ])
      ]
    )
  ]
})
export class PostsPage implements OnInit, OnDestroy {

  @ViewChild(IonFabButton, {static: true}) fabButton: IonFabButton;
  @ViewChild(IonSearchbar, { static: false }) searchbar: IonSearchbar;

  showShortDesciption = true
  noSearchInput = false;
  searchTerm: any;
  searching = false;
  allPostsLength: any;
  loadedAllPosts: any;

 alterDescriptionText() {
    this.showShortDesciption = !this.showShortDesciption
 }

  postsSub: Subscription;
  notificationsSub: Subscription;
  profileSub: Subscription;

  commentForm: FormGroup;
  allPosts;
  followedPost;
  followedPostCount;
  userEmail;
  userFullName;
  userProfilePicture;
  date;
  profilePicture;
  notificationsLength: number;

  constructor(
    private router: Router,
    private modal: ModalController,
    public posts: PostsService,
    private profile: ProfileService,
    private toast: ToastController,
    private loading: LoadingController,
    private formBuilder: FormBuilder,
    private postsEmitterService: PostPageEmitterService,
    private studentChat: StudentChatService,
    private notificationsService: NotificationsService
  ) {}
  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
    this.notificationsSub.unsubscribe();
    this.postsEmitterService.subsVar.unsubscribe();
    this.profileSub.unsubscribe();
    this.posts.followingSubject$.unsubscribe();
  }
  ngOnInit() {

    this.getUserInfo();
    this.getPosts();
    this.getFollowingPosts();

    // When Users updated their Profile Picture, Unfollow/Follow, Up/Downvote, or Comment on an individual
    if (this.postsEmitterService.subsVar === undefined) {
      this.postsEmitterService.subsVar = this.postsEmitterService.invokePostsPageRefresh.subscribe(() => {
        this.getPosts();
        this.getUserInfo();
      });
    }

     // To collect comment data
    this.commentForm = this.formBuilder.group({
      comment: ['']
    });
  }
  filter($event) {
    this.initializeItems();
    this.searchTerm = $event.detail.value;

    // If there are no matches with the searchTerm
    // if ( this.allPostsLength === 0 ) {

    //   console.log('No results from that search');
    //   this.searching = true;
    //   this.searchTerm = searchTerm;

    //   // this.searchbar.getInputElement().then(  (searchbarInputElement) => {
    //   //   searchbarInputElement.value = '';
    //   // });

    //   this.getPosts();
    //   this.noSearchInput = true;
    // }
  }
  searchHashtags(){
    console.log('Searching...');
    let searchedPosts = [];
    let searchTermArray = this.searchTerm.split(',');
    console.log(searchTermArray);
    
    console.log(typeof this.searchTerm);
    this.allPosts = this.allPosts.filter( foundPost => {
      console.log(foundPost.hashtags);
       foundPost.hashtags.forEach(hashtag => {
         if(hashtag === this.searchTerm) {
           console.log('Post ' + foundPost._id + ' has this hashtag');
           searchedPosts.push(foundPost)
         }
       });
       if (!this.searchTerm) {
        console.log('Search term is empty; showing all events instead');
        this.noSearchInput = false;
        this.searching = false;
        this.getPosts();
      }

      this.noSearchInput = true;
    });

    this.allPosts = searchedPosts;
    this.searchBarBlur();
  }
  async searchLoading() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Searching ...',
      duration: 1000
    });
    await loading.present();

    await loading.onDidDismiss().then(() => {
      this.searchHashtags();
    });
    console.log('Loading dismissed!');
  }
  async searchLoadingEmptySearch() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Refreshing Posts',
      duration: 1000
    });
    await loading.present();

    await loading.onDidDismiss().then(() => {
      this.getPosts();
    });
    console.log('Loading dismissed!');
  }
  initializeItems(): void {
    this.allPosts = this.loadedAllPosts;
  }
  searchBarFocus() {
    console.log('Focusing on Searchbar');

    let searchBarWrapper = document.getElementById('searchbar-wrapper');
    let fabWrapper = document.getElementById('fab-wrapper');
    let tabBar = document.getElementById('tabBar');
    searchBarWrapper.style.height = '275px';
    // searchBarWrapper.style.background = '#0055a5c7';
    fabWrapper.style.display = 'none';
    tabBar.style.height = '0px';
    tabBar.style.transition = '500ms'
    tabBar.style.transform = 'translateY(40px)';
  }
  searchBarBlur() {
    console.log('Blurring out of Searchbar');

    let searchBarWrapper = document.getElementById('searchbar-wrapper');
    let fabWrapper = document.getElementById('fab-wrapper');
    let tabBar = document.getElementById('tabBar');
    searchBarWrapper.style.height = '60px';
    searchBarWrapper.style.background = 'none';
    fabWrapper.style.display = 'block';
    tabBar.style.height = '50px';
    tabBar.style.transition = '500ms'
    tabBar.style.transform = 'translateY(0px)';
  }


  // charHistory = [];
  // addHashTag(key) {
  //   this.charHistory.push(key.code);
  //   console.log(this.charHistory);
  //   if(key.code === "Backspace") {
  //     console.log('Gotta Pop from charHistory!');
  //     let backspace = this.charHistory.pop()
  //     let lastLetter = this.charHistory.pop()
  //     console.log(lastLetter);
  //     console.log(this.charHistory)
  //   }
  // }
  postPage(post) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/posts/post-page', post._id]);
  }
  getUserInfo() {
    this.postsSub = this.profile.getUserDetails().subscribe( details => {
      this.userEmail = details['email'];
      this.userProfilePicture = details['profilePicture'];
      this.userFullName = details['fullName'];
      this.followedPost = details['followedPost'];

      this.notificationsSub = this.notificationsService.notifications$.subscribe(
        notifications => {
          console.log(notifications.length);
          this.notificationsLength = notifications.length;
        }
      );
    });
  }
  getFollowingPosts() {
    // Get the user's posts he/she is following
    this.profileSub = this.profile.getUserDetails().subscribe( details => {

      this.posts.followingSubject$.next(this.followedPost);
      this.posts.followingSubject$.subscribe( posts => {
        this.followedPostCount = posts.length;
      });


      this.studentChat.conversations$.next(Object.values(details['studentChat']).reverse());
    });
  }
  doRefresh(event) {

    this.getFollowingPosts();

    this.postsSub = this.posts.getPosts().subscribe( jobs => {
      this.allPosts = Object.values(jobs).reverse();

      for (const post of this.allPosts) {
        post.date = formatDistanceToNow( new Date(post.date), {
          includeSeconds: true,
          addSuffix: true
        });
      }
    });

    // Present Toast
    setTimeout(() => {
      const toast = this.toast.create({
        message: 'Inspiration Page has been refreshed',
        duration: 3000
      });
      event.target.complete();
      toast.then(toast => toast.present());
    }, 2000);
  }
  async getPosts() {
    this.postsSub = this.posts.getPosts().subscribe( posts => {
      // console.log(posts);

      // I am using two arrays for the same data to improve the loading of the data. As a User searches through the list events,
      // .

      // First Array of Events
      // this.allEvents = Object.values(events);
      this.allPosts = Object.values(posts);
      this.allPostsLength  = this.allPosts.length;
      this.allPosts.reverse();

      // Second Array of Events
      this.loadedAllPosts = Object.values(posts);
      this.loadedAllPosts.reverse();

      this.posts.postsSubject$.next(this.allPosts);


      for (const post of this.allPosts) {
        post.date = formatDistanceToNow( new Date(post.date), {
          includeSeconds: true,
          addSuffix: true
        });
      }
    });
  }
  addPost() {
    this.router.navigate(['/home/posts/add-post']);
  }
  myPosts(userEmail) {
    console.log('Going to my posts page');
    this.router.navigate(['/home/posts/my-posts', userEmail]);
  }
  following() {
    this.router.navigate(['/home/posts/following']);
  }
  chat() {
    this.router.navigate(['/home/posts/student-chat']);
  }
  notifications() {
    this.router.navigate(['/home/posts/notifications']);
  }
  async comment(postID, userFullName, userEmail, userProfilePicture, comment) {

    console.log(postID, userFullName, userEmail, userProfilePicture, comment);

    // Reset Comment Input
    this.commentForm.reset();
    console.log('Posting comment');
    console.log('Post ID: ' + postID);

    await this.posts.comment(
      postID,
      userFullName,
      userEmail,
      userProfilePicture,
      comment.comment
    ).subscribe(
      newComment => {
         this.postsSub = this.posts.getPostInfo(postID).subscribe(
          post => {
            for (let postComments of post['comments']) {


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

            let postCreator = post['creatorEmail'];
            console.log(newComment);

            // this.userEmail = instigatingUser
            // postCreator = recievingUser
            this.notificationsService.
            commentNotification(this.userEmail, postCreator, postID, newComment).subscribe();
          }
        );
      }
    );

    this.postsSub = this.posts.getPostInfo(postID).subscribe(
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