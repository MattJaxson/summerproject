import { Injectable } from '@angular/core';
// import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

// export class SocketNameSpace extends Socket {
//   constructor(socketConfig: SocketIoConfig) {
//     // TODO: Study this a little more
//     // super()
//     super(socketConfig);
//   }
// }

@Injectable({
  providedIn: 'root'
})
export class StudentChatService {
  constructor(
    private router: Router) {
   }

   // Whatever is returned from the messages event on the socket.io server, will be returned as an Observable -- fromEvent().
  // currentChatRoom ]
chatId;
email;

conversations$ = new BehaviorSubject([]);
// studentsChat  = new SocketNameSpace({url: 'http://127.0.0.1:3000/student-chat', options: {} });

// currentChatRoom = this.studentsChat.fromEvent('messages');
// newChatRoom = this.studentsChat.fromEvent('newChatRoom');

// getChat(chatId, email): void {
//   this.studentsChat
//     .emit('getChat', { chatId, email });
// }

// tslint:disable-next-line: max-line-length
// sendMessage(chatId, message, fullName, profilePicture, requestingUserFullname, requestingUserEmail, requestingUserPhoto, respondingUserFullname, respondingUserEmail, respondingUserPhoto): void {
//   this.studentsChat
//     .emit('addMessage', {
//       chatId,
//       message,
//       fullName,
//       profilePicture,
//       requestingUserFullname,
//       requestingUserEmail,
//       requestingUserPhoto,
//       respondingUserFullname,
//       respondingUserEmail,
//       respondingUserPhoto
//   });
// }

  // tslint:disable-next-line: max-line-length
  // async newChatroom(requestingUserFullname, requestingUserEmail, requestingUserPhoto, respondingUserFullname, respondingUserEmail, respondingUserPhoto) {
  //   let conversations = await this.studentsChat
  //     .emit('addChatroom', {
  //       chatId: this.chatIdGenerator(),
  //       requestingUserFullname,
  //       requestingUserEmail,
  //       requestingUserPhoto,
  //       respondingUserFullname,
  //       respondingUserEmail,
  //       respondingUserPhoto
  //     });
  //   // console.log(conversations);

  //   this.newChatRoom.subscribe(
  //     async c => {
  //       conversations = Object.values(c);
  //       for (let convo of conversations) {
  //         // console.log(convo.requestingUserEmail);
  //         // console.log(this.email);
  //         if (convo.requestingUserEmail === this.email) {
  //           console.log('The requesting users is the same user as the one who logged in on this app');
  //           // TODO: get users profile picture
  //           // TODO: get the most recent message's text and date
  //           //  mostRecentMessage
  //           convo.isUser = true;
  //         }
  //       }

  //       await this.conversations$.next(Object.values(conversations).reverse());
  //       await this.router.navigate(['home/posts/student-chat/chat-page', this.chatId, requestingUserEmail]);
  //     });

  // }

  // TODO: Refactor for production
  // Current for development purposes
  // deleteMessages(chatId, userFullName, userEmail) {
  //   this.studentsChat.emit('deleteMessages', {
  //     chatId,
  //     userFullName,
  //     userEmail,
  //   });
  // }


  //  private chatIdGenerator(): string {
  //   let text = 'chat-';
  //   const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  //   for (let i = 0; i < 5; i++) {
  //     text += possible.charAt(Math.floor(Math.random() * possible.length));
  //   }
  //   text +=  Date.now();
  //   this.chatId = text;
  //   return text;
  // }

}
