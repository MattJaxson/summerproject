import { Injectable } from '@angular/core';
// import { Socket, SocketIoConfig } from 'ngx-socket-io';

// export class SocketNameSpace extends Socket{
//   constructor(socketConfig: SocketIoConfig){
//     super(socketConfig);
//   }
// }

@Injectable({
  providedIn: 'root'
})
export class MentorChatService {

  // mentorsChat: SocketNameSpace;
  constructor() {
    // this.mentorsChat  = new SocketNameSpace({url: 'http://127.0.0.1:3000/mentor-chat', options: {} });
  }

  // newChatroom(): void {
  //   this.mentorsChat
  //     .emit('addChatroom', { chatId: this.chatId() });
  // }

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
