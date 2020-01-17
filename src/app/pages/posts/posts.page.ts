import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastController } from '@ionic/angular';
import { formatDistance, subDays } from 'date-fns';



@Component({
  selector: 'app-posts',
  templateUrl: 'posts.page.html',
  styleUrls: ['posts.page.scss']
})
export class PostsPage implements OnInit {
  allPosts;
  userEmail;
  date;

  constructor(
  private router: Router,
  public posts: PostsService,
  private profile: ProfileService,
  private toast: ToastController
  ) {}

  ngOnInit() {

    // Get all for post for this section
    this.posts.getPosts().subscribe(
      posts => {
        this.allPosts =  Object.values(posts);
        let date = this.allPosts[0].date;
        date = formatDistance(
          new Date(),
          new Date(date),
          { includeSeconds: true }
        );
        this.date = date;
        console.log(this.date);
        this.posts.commentsSubject$.subscribe(
          comments => {
            this.allPosts.comments = comments;
          }
        );
      }
    );


    // Get the User's details
    this.profile.getUserDetails().subscribe(
      details => {
        this.userEmail = details['email'];
        console.log('User email: ' + this.userEmail);
      });
  }

  postPage(post) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/posts/post-page', post._id]);
  }

  async doRefresh(event) {
    await this.posts.getPosts().subscribe( jobs => {
      this.allPosts = Object.values(jobs);
      console.log(this.allPosts);
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


  addTextPost() {
    this.router.navigate(['/home/posts/add-post']);
  }

  following() {
    this.router.navigate(['/home/posts/following']);
  }


}
