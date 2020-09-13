import { Component, OnInit } from '@angular/core';
import { DrawerState } from 'ion-bottom-drawer';
import { AlertController, ModalController } from '@ionic/angular';
import { ReportConvoPage } from 'src/app/modals/report-convo/report-convo.page';
import { StudentChatService } from 'src/app/services/student-chat.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.page.html',
  styleUrls: ['./chat-page.page.scss'],
})
export class ChatPagePage implements OnInit {
  shouldBounce = true;
  dockedHeight = 400;
  distanceTop = 56;
  drawerState = DrawerState.Bottom;
  states = DrawerState;
  minimumHeight = 0;

  message: string;


  constructor(
    private alert: AlertController,
    private modal: ModalController,
    private studentChat: StudentChatService
  ) { }

  ngOnInit() {

  }

  sendMessage() {
    // this.studentChat.socket.emit('message', this.message);
    // const element = document.createElement('ion-item');
    // element.innerHTML =
    // `<ion-item style="margin: 5px 0 15px 0;">
    //   <ion-avatar slot="start">
    //     <img src="../../../../assets/batman-pro-pic.png">
    //   </ion-avatar>
    //   <ion-label>
    //     <h4 style="opacity: 0.4;">Username <span class="date-sent">&middot; date</span></h4>
    //     <p style="font-size: 1.1em; color: #111;">${this.message}</p>
    //   </ion-label>
    // </ion-item>`;
    // document.getElementById('message-list').appendChild(element);
    // this.message = '';
  }

  menu() {
    if (this.drawerState === DrawerState.Bottom) {
      this.drawerState = DrawerState.Docked;
    } else {
        this.drawerState = DrawerState.Bottom;
    }
  }

  async delertAlert() {
    const alert = await this.alert.create({
      cssClass: '',
      header: 'Are you sure you want to delete this conversation?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
           console.log('Deleting');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  async reportAlert() {
    const alert = await this.alert.create({
      cssClass: '',
      header: 'Are you sure you want to report this conversation?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
           console.log('Reporting');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  async reportConvo() {

    const reportModalConfig = await this.modal.create({
      component: ReportConvoPage,
      componentProps: {

      }
    });
    this.drawerState = DrawerState.Bottom;
    await reportModalConfig.present();

  }

}
