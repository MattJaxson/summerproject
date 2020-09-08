import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NewMessageStudentPage } from 'src/app/modals/new-message-student/new-message-student.page';

@Component({
  selector: 'app-student-chat',
  templateUrl: './student-chat.page.html',
  styleUrls: ['./student-chat.page.scss'],
})
export class StudentChatPage implements OnInit {

  constructor(
    private router: Router,
    private modal: ModalController) { }

  ngOnInit() {
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
