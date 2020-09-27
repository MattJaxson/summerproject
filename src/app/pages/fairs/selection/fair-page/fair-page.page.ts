import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FairChaperoneRegisterPage } from 'src/app/modals/fair-chaperone-register/fair-chaperone-register.page';
import { FairPartnerRegisterPage } from 'src/app/modals/fair-partner-register/fair-partner-register.page';
import { FairStudentRegisterPage } from 'src/app/modals/fair-student-register/fair-student-register.page';
import { FairVolunteerRegisterPage } from 'src/app/modals/fair-volunteer-register/fair-volunteer-register.page';



@Component({
  selector: 'app-fair-page',
  templateUrl: './fair-page.page.html',
  styleUrls: ['./fair-page.page.scss'],
})
export class FairPagePage implements OnInit {
  fair: string;
  usertype: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private modal: ModalController) { }

  ngOnInit() {
    const fair  = this.activatedRoute.snapshot.paramMap.get('fair');
    this.fair = 'Tech Fair';

    const usertype  = this.activatedRoute.snapshot.paramMap.get('usertype');
    this.usertype = 'volunteer';
  }

  async register() {

    // Student
    if(this.usertype === 'student') {
      const registerModalConfig = await this.modal.create({
        component: FairStudentRegisterPage,
      });
      await registerModalConfig.present();
    }

    // Chaperone
    if(this.usertype === 'chaperone') {
      const registerModalConfig = await this.modal.create({
        component: FairChaperoneRegisterPage,
      });
      await registerModalConfig.present();
    }

    // Volunteer
    if(this.usertype === 'volunteer') {
      const registerModalConfig = await this.modal.create({
        component: FairVolunteerRegisterPage,
      });
      await registerModalConfig.present();
    }

    // Partner
    if(this.usertype === 'partner') {
      const registerModalConfig = await this.modal.create({
        component: FairPartnerRegisterPage,
      });
      await registerModalConfig.present();
    }
  }

}
