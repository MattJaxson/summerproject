import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../services/post.service';



@Component({
  selector: 'app-posts',
  templateUrl: 'posts.page.html',
  styleUrls: ['posts.page.scss']
})
export class PostsPage implements OnInit {
  allPosts;

  constructor(
  private router: Router,
  private posts: PostsService
  ) {}

  ngOnInit() {
    this.posts.getPosts().subscribe(
      posts => {
        this.allPosts =  Object.values(posts);
      }
    );
  }

  async postPage() {
    this.router.navigate(['/home/posts/post-page']);
  }

  addTextPost() {
    this.router.navigate(['/home/posts/add-post']);
  }

  following() {
    this.router.navigate(['/home/posts/following']);
  }


}
