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
  postsSubject$ = new BehaviorSubject([]);
  commentsSubject$ = new BehaviorSubject([]);
  followingSubject$ = new BehaviorSubject([]);

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
    return this.http.post(`${this.BACKEND_URL}/api/posts/comment`, { postID, date, userFullName, userEmail, comment } )

  }

  editPost(postID, newPost) {
    return this.http.post(`${this.BACKEND_URL}/api/posts/edit-post`, { postID, newPost });

  }

  editComment(commentID, postID, newComment) {
    return this.http.post(`${this.BACKEND_URL}/api/posts/edit-comment`, { postID, commentID, newComment });

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
    return this.http.post(`${this.BACKEND_URL}/api/posts/up-vote-comment`, { postID, commentID, userEmail });

  }

   // Downvote
   downVoteComment(postID, commentID, userEmail) {
    return this.http.post(`${this.BACKEND_URL}/api/posts/down-vote-comment`, { postID, commentID, userEmail });

  }

  followPost(postID, userEmail) {

    return this.http.post(`${this.BACKEND_URL}/api/posts/follow`, {
      _id: postID,
      email: userEmail
    }).subscribe( data => {
      let updatedFollowingPosts = [...Object.values(data)];
      this.followingSubject$.next(updatedFollowingPosts);
    });
  }

  unFollowPost(postID, userEmail) {

    return this.http.post(`${this.BACKEND_URL}/api/posts/unfollow`, {
      _id: postID,
      email: userEmail
    }).subscribe( data => {
      let updatedFollowingPosts = [...Object.values(data)];
      this.followingSubject$.next(updatedFollowingPosts);
    });
  }

  getFollowedPost(userId) {
    return this.http.post(`${this.BACKEND_URL}/api/posts/get-followed-posts`, {_id: userId});
  }

  deleteComment(postID, commentID) {
    return this.http.post(`${this.BACKEND_URL}/api/posts/delete-comment`, {_id: postID, _cid: commentID});
  }

  deletePost(postID) {
    return this.http.post(`${this.BACKEND_URL}/api/posts/delete-post`, {_id: postID});
  }

  // tslint:disable-next-line: max-line-length
  reportComment(commentID, commentContents, postID, post, userEmail, userFullname, reportedUserEmail, reportedUserName, reportReason, commentDate, ) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/posts/report`, { commentID, commentContents, postID, post, userEmail, userFullname, reportedUserEmail, reportedUserName, reportReason, commentDate });
  }

  replyComment(commentID, postID, reply, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail  ) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/posts/reply-comment`, { postID: postID, commentID: commentID, reply: reply, userFullName: userFullName, userProfilePicture: userProfilePicture, userEmail: userEmail, commentUserEmail: commentUserEmail, commentUserFullName: commentUserFullName });
  }

  deleteReply(replyID, commentID, postID) {
    return this.http.post(`${this.BACKEND_URL}/api/posts/delete-reply`, { _rid: replyID, _cid: commentID, _pid: postID })
  }
}
