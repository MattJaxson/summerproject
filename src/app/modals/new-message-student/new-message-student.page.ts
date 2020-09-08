import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-message-student',
  templateUrl: './new-message-student.page.html',
  styleUrls: ['./new-message-student.page.scss'],
})
export class NewMessageStudentPage implements OnInit {

  constructor(
    private modal: ModalController
    ) { }

  ngOnInit() {
  }

  cancel() {
    this.modal.dismiss();
 }

}
