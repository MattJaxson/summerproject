import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ProfileService } from '../services/profile.service';


@Injectable({
  providedIn: 'root'
})

export class PostsService {
  BACKEND_URL = environment.url;
  commentsSubject$ = new BehaviorSubject([]);
  followersSubject$ = new BehaviorSubject([]);

  constructor(
    private http: HttpClient,
    private profile: ProfileService
  ) {}

  getPosts() {
    // console.log('Getting Posts');
    return this.http.get(`${this.BACKEND_URL}/api/posts/`);
  }

  getPostInfo(id) {
    // console.log(`Getting information for post id ${id}`);
    return this.http.post(`${this.BACKEND_URL}/api/posts/post-info`, {_id: id});
  }

  addPost(creatorName, creatorEmail, post) {
    console.log('Adding post to post que...');
    return this.http.post(`${this.BACKEND_URL}/api/posts/add-text-post`, {creatorName, creatorEmail, post });
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

  canEditPost(postID, userEmail) {
    // Get userEmail
    // See if it matches each and every postID in the feed
    // Display to UI that this post can be editted.

  }

  canEditComment(postID, userEmail) {
    // Get userEmail
    // See if it matches each and every postID in the feed
    // Display to UI that this post can be editted.

  }

  editPost(postID, userEmail) {
    // 

  }

  editComment(postID, userEmail) {
    // 

  }

  // Upvote Post
  upVotePost(postID, userEmail) {
    return this.http.post(`${this.BACKEND_URL}/api/posts/up-vote-post`, { postID, userEmail });

  }

   // Downvote Post
   downVotePost(postID, userEmail) {
    return this.http.post(`${this.BACKEND_URL}/api/posts/down-vote-post`, { postID, userEmail });
  }

   // Upvote
   upVoteComment(postID, commentID, userEmail) {
    return this.http.post(`${this.BACKEND_URL}/api/posts/up-vote-comment`, { postID, userEmail });

  }

   // Downvote
   downVoteComment(postID, commentID, userEmail) {
    return this.http.post(`${this.BACKEND_URL}/api/posts/up-vote-comment`, { postID, userEmail });

  }

  followPost(postID, userEmail) {

    return this.http.post(`${this.BACKEND_URL}/api/posts/follow`, {
      _id: postID,
      email: userEmail
    });
  }

  unFollowPost(postID, userEmail) {

    return this.http.post(`${this.BACKEND_URL}/api/posts/unfollow`, {
      _id: postID,
      email: userEmail
    });
  }

  getFollowedPost(userId) {
    return this.http.post(`${this.BACKEND_URL}/api/posts/get-followed-posts`, {_id: userId});
  }
}
