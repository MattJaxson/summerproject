import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  post() {
    this.router.navigate(['home/posts/add-post/verification']);
  }

}
