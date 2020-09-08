import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-message-mentor',
  templateUrl: './new-message-mentor.page.html',
  styleUrls: ['./new-message-mentor.page.scss'],
})
export class NewMessageMentorPage implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.modal.dismiss();
 }

}
