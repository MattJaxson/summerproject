import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PostsService {
  BACKEND_URL = environment.url;
  commentsSubject$ = new BehaviorSubject([]);

  constructor(
    private http: HttpClient
  ) {}

  getPosts() {
    console.log('Getting Posts');
    return this.http.get(`${this.BACKEND_URL}/api/posts/`);
  }

  getPostInfo(id) {
    console.log(`Getting information for post id ${id}`);
    return this.http.post(`${this.BACKEND_URL}/api/posts/post-info`, {_id: id});
  }

  comment(
    postID,
    date,
    userFullName,
    userEmail,
    { comment: comment }
  ) {
    return this.http.post(`${this.BACKEND_URL}/api/posts/comment`, { postID, date, userFullName, userEmail, comment } ).subscribe();
  }

}

