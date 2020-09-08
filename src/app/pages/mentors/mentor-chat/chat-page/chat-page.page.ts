import { Component, OnInit } from '@angular/core';
import { DrawerState } from 'ion-bottom-drawer';
import { AlertController, ModalController } from '@ionic/angular';
import { ReportConvoPage } from 'src/app/modals/report-convo/report-convo.page';

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

  constructor(
    private alert: AlertController,
    private modal: ModalController) { }

  ngOnInit() {
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
