import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-report-convo',
  templateUrl: './report-convo.page.html',
  styleUrls: ['./report-convo.page.scss'],
})
export class ReportConvoPage implements OnInit {

  constructor(
    private modal: ModalController,
    private alert: AlertController,
    private toast: ToastController,
  ) { }

  ngOnInit() {
  }

  cancel() {
     this.modal.dismiss();
  }

  async reportAlert() {
    const alert = await this.alert.create({
      cssClass: '',
      header: 'Are you sure you want to report this conversation?',
      buttons: [
        {
          text: 'Yes',
          handler: async () => {
           await this.reportedToast();
           await this.modal.dismiss();
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

  async reportedToast() {
    const toast = await this.toast.create({
      cssClass: 'favorited-toast',
      message: `You have reported you conversation with ---`,
      duration: 2000
    });
    toast.present();
  }


}
