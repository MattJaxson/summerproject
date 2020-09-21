import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NewMessageStudentPage } from 'src/app/modals/new-message-student/new-message-student.page';
import { StudentChatService } from 'src/app/services/student-chat.service';
import { ProfileService } from 'src/app/services/profile.service';

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
              // console.log(convo.requestingUserEmail);
              // console.log(this.email);
              if (convo.requestingUserEmail === this.email) {
                // console.log('The requesting users is the same user as the one who logged in on this app');
                // TODO: get the most recent message's text and date
                //  mostRecentMessage
                convo.isUser = true;
              }
            }

            // console.log('Conversations: ');
            // console.log(this.conversations);
            if (this.conversations.length == 0) {
              console.log('there are no converstations');
              const noMessages = document.getElementById('no-messages');
              // tslint:disable-next-line: max-line-length
              noMessages.innerHTML = '<p>You have <b>no messages</b> in your inbox. Please press the <ion-icon class="new-message" size="small" name="create"></ion-icon> button to create a new message. </p>';
            }

            if (this.conversations.length > 0) {
              // console.log('there are converstations');
              const noMessages = document.getElementById('no-messages');
              // tslint:disable-next-line: max-line-length
              noMessages.style.display = 'none';
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
