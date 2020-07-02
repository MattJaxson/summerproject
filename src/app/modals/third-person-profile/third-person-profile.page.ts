import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-third-person-profile',
  templateUrl: './third-person-profile.page.html',
  styleUrls: ['./third-person-profile.page.scss'],
})
export class ThirdPersonProfilePage implements OnInit {
  creatorEmail: string;
  creatorName: string;

  constructor(
    private navParams: NavParams,
    private modal: ModalController) { }

  ngOnInit() {
    this.creatorEmail = this.navParams.get('creatorEmail');
    this.creatorName = this.navParams.get('creatorName');
  }

  cancel() {
    console.log('cancelling comment...');
    this.modal.dismiss();
  }

}
