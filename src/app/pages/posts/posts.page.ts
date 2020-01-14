import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../services/post.service';
import { ProfileService } from 'src/app/services/profile.service';



@Component({
  selector: 'app-posts',
  templateUrl: 'posts.page.html',
  styleUrls: ['posts.page.scss']
})
export class PostsPage implements OnInit {
  allPosts;

  constructor(
  private router: Router,
  private posts: PostsService,
  private profile: ProfileService,
  ) {}

  ngOnInit() {
    this.posts.getPosts().subscribe(
      posts => {
        this.allPosts =  Object.values(posts);
      }
    );

    this.profile.getUserDetails().subscribe(
      details => {
        console.log(details);
      });
  }

  async postPage(page) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/posts/post-page', page._id]);
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.posts.getPosts().subscribe( jobs => {
      this.allPosts = Object.values(jobs);
      console.log(typeof this.allPosts);
      console.log(this.allPosts);
    });

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }


  addTextPost() {
    this.router.navigate(['/home/posts/add-post']);
  }

  following() {
    this.router.navigate(['/home/posts/following']);
  }


}
