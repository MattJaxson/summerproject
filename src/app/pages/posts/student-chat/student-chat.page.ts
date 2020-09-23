import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NewMessageStudentPage } from 'src/app/modals/new-message-student/new-message-student.page';
import { StudentChatService } from 'src/app/services/student-chat.service';
import { ProfileService } from 'src/app/services/profile.service';
import {formatDistanceToNow } from 'date-fns';


@Component({
  selector: 'app-student-chat',
  templateUrl: './student-chat.page.html',
  styleUrls: ['./student-chat.page.scss'],
})
export class StudentChatPage implements OnInit {
  fullName: string;
  profilePicture: string;
  email: string;
  conversations;
  mostRecentMessage;

  constructor(
    private router: Router,
    private modal: ModalController,
    private studentChat: StudentChatService,
    private profile: ProfileService) { }

  ngOnInit() {
    this.profile.getUserDetails()
      .subscribe( data => {
        this.fullName = data['fullName'];
        this.profilePicture = data['profilePicture'];
        this.email = data['email'];
        this.studentChat.conversations$.subscribe(
          conversations => {
            this.conversations = Object.values(conversations).reverse();
            for (let convo of this.conversations) {
              for (const message of convo.messages) {
                message.date = formatDistanceToNow(new Date(message.date));
              }
              if (convo.requestingUserEmail === this.email) {
                // console.log('The requesting users is the same user as the one who logged in on this app');
                convo.isUser = true;
              }
              // Get the most recent message information for text and date
              convo.lastMessage = convo.messages.slice(-1)[0];
              convo.lastMessageText = convo.lastMessage.text;
              convo.lastMessageTime = convo.lastMessage.date;
            }
        });
  });
}

  chatPage(chatId) {
    this.router.navigate(['home/posts/student-chat/chat-page', chatId, this.fullName, this.profilePicture, this.email]);
  }

  async newMessage() {

    const newMessageModalConfig = await this.modal.create({
      component: NewMessageStudentPage,
      componentProps: {

      }
    });
    await newMessageModalConfig.present();

  }

  delete(item) {

  }

}
