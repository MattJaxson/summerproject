import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StudentChatService } from 'src/app/services/student-chat.service';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-new-message-student',
  templateUrl: './new-message-student.page.html',
  styleUrls: ['./new-message-student.page.scss'],
})
export class NewMessageStudentPage implements OnInit {
  requestingUserFullname;
  requestingUserEmail;
  respondingUser = 'respondingUser';

  constructor(
    private modal: ModalController,
    private studentChat: StudentChatService,
    private profile: ProfileService
    ) { }

  ngOnInit() {
    this.profile.getUserDetails().subscribe( data => {
      this.requestingUserFullname = data['fullName']
      this.requestingUserEmail = data['email']
    });
  }

  async newChatroom() {
    await this.studentChat.newChatroom(this.requestingUserFullname, this.requestingUserEmail, this.respondingUser);
  }

  cancel() {
    this.modal.dismiss();
  }



}
