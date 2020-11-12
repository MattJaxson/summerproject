import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  BACKEND_URL = environment.url;
  notifications$ = new BehaviorSubject(['']);

  constructor(
    private http: HttpClient) { }

  getNotifications(email) {
      console.log('Getting Notifications');
      console.log(email);
      return this.http.post(`${this.BACKEND_URL}/api/notifications`, {email: email});
    }

  clearNotifications(email) {
    console.log('Clearing Notifications');
    console.log(email);
    return this.http.post(`${this.BACKEND_URL}/api/notifications/clear-notifications`, {email: email});
  }

  commentNotification(instigatingUser, recievingUser, postID, commentID) {
    console.log(`Sending notfication to ${recievingUser} that ${instigatingUser} commented on their post.`);
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/notifications/comment-on-post-notification`, {instigatingUser, recievingUser, postID, commentID});
  }

  replyNotification(instigatingUser, recievingUser, postID, commentID, replyID) {
    console.log(`Sending notfication to ${recievingUser} that ${instigatingUser} commented on their post.`);
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/notifications/reply-on-comment-notification`, {instigatingUser, recievingUser, postID, commentID, replyID});

  }
}
