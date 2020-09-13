import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { HttpClient } from '@angular/common/http';


export class SocketNameSpace extends Socket{
  constructor(socketConfig: SocketIoConfig){
    super(socketConfig);
  }
}

@Injectable({
  providedIn: 'root'
})
export class StudentChatService {
  studentsChat: SocketNameSpace;
  constructor(
    private http: HttpClient
  ) {

    this.studentsChat  = new SocketNameSpace({url: 'http://10.0.1.5:3000/student-chat', options: {} });
   }

   // create a new document with a randomly generated id, and an empty string
  newChatroom(requestingUserFullname, requestingUserEmail, respondingUser) {
    this.studentsChat
      .emit('addChatroom', {
        chatId: this.chatId(),
        requestingUserFullname,
        requestingUserEmail,
        respondingUser,
        dateCreated: Date.now(),
      });
  }


   private chatId(): string {
    let text = 'chat-';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    text +=  Date.now();
    return text;
  }

}
