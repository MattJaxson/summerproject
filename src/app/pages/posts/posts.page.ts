import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: 'posts.page.html',
  styleUrls: ['posts.page.scss']
})
export class PostsPage {

  constructor(
  private router: Router
  ) {}

  addPost() {
    this.router.navigate(['/home/posts/add-post']);
  }

  postPage() {
    this.router.navigate(['/home/posts/post-page']);
  }

  following() {
    this.router.navigate(['/home/posts/following']);
  }


}
