import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-reply-options-popover',
  templateUrl: './reply-options-popover.component.html',
  styleUrls: ['./reply-options-popover.component.scss'],
})
export class ReplyOptionsPopoverComponent implements OnInit {
  selection: any;

  constructor(
    private popoverController: PopoverController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    ) { }

  ngOnInit() {}
  selectOption(e) {
    this.selection = e.detail.value;
    console.log(this.selection);
    switch (this.selection) {
      case 'edit':
        console.log('Editting!')
        break;
      case 'delete':
        console.log('Deleting!');
        this.presentAlertConfirm();
        break;
      case 'report':
        console.log('Reporting!')
        break;
      default:
        break;
    }
  }
  dismiss() {
    this.popoverController.dismiss({
      data: this.selection
    });
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete?',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: async () => {
            console.log('Deleting');
            // TODO: Delete Reply
            await this.deleteLoading();
            await alert.dismiss();
          }
        }
      ]
    });
    await alert.present();
  }
  async deleteLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Deleting Reply ...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
