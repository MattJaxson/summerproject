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
  email;
  conversations;

  constructor(
    private router: Router,
    private modal: ModalController,
    private studentChat: StudentChatService,
    private profile: ProfileService) { }

  ngOnInit() {
    this.profile.getUserDetails()
      .subscribe( data => {
        this.conversations = Object.values(data['studentChat']);
        console.log(this.conversations);
      });
  }

  chatPage() {
    this.router.navigate(['home/posts/student-chat/chat-page']);
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
