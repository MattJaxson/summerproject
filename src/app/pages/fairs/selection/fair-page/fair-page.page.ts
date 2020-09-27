import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, OnDestroy, ChangeDetectionStrategy, HostListener } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FairPagePage implements OnInit, AfterViewInit {

  fair: string;
  usertype: string;

  parking = false;
  parkingPopIn = false;
  boothPartners = false;
  boothPartnersPopIn = false;
  faq = false;
  faqPopIn = false;
  survey = false;
  surveyPopIn = false;


  @ViewChild('info', {static: false})  infoGrid: ElementRef;
  @ViewChild('parking', {static: false})  parkingGrid: ElementRef;
  @ViewChild('boothPartners', {static: false})  boothPartnersGrid: ElementRef;
  @ViewChild('faq', {static: false})  faqGrid: ElementRef;
  @ViewChild('survey', {static: false})  surveyGrid: ElementRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private modal: ModalController) {

     }

  ngOnInit() {

    const fair  = this.activatedRoute.snapshot.paramMap.get('fair');
    this.fair = fair;

    const usertype  = this.activatedRoute.snapshot.paramMap.get('usertype');
    this.usertype = usertype;


    switch (usertype) {
      case 'student':
        this.boothPartners = true;
        // set survey to false until surveys have to be pushed out posts surcey
        this.survey = true;
        break;
      case 'chaperone':
        console.log('usertype: chaperone');
        this.boothPartners = true;
        // set survey to false until surveys have to be pushed out posts surcey
        this.survey = true;
        break;
      case 'volunteer':
        console.log('usetype: volunteer');
        this.parking = true;
        this.faq = true;
        // set survey to false until surveys have to be pushed out posts surcey
        this.survey = true;
        break;
      case 'partner':
        console.log('usertype: partner');
        this.parking = true;
        this.faq = true;
        // set survey to false until surveys have to be pushed out posts surcey
        this.survey = true;
        break;
      default:
        console.log('There was a problem getting the usertype');
        break;
    }
  }

  ngAfterViewInit() {
    console.log(this.boothPartnersGrid);

    // let boothPartnersGridPosition = this.boothPartnersGrid.el.offsetTop;


  }

  getYPosition(e: Event) {
    console.log(this.boothPartnersGrid);

    const boothPartnersGridFromTop = this.boothPartnersGrid.nativeElement.offsetTop;
    const boothPartnersGridHeight = this.boothPartnersGrid.nativeElement.offsetHeight;

    const parkingGridFromTop = this.parkingGrid.nativeElement.offsetTop;
    const parkingGridHeight = this.parkingGrid.nativeElement.offsetHeight;

    const faqGridFromTop = this.faqGrid.nativeElement.offsetTop;
    const faqGridHeight = this.faqGrid.nativeElement.offsetHeight;

    const surveyGridFromTop = this.surveyGrid.nativeElement.offsetTop;
    const surveyGridHeight = this.surveyGrid.nativeElement.offsetHeight;

    // console.log('Current Y position: ' + e['detail'].currentY);
    // console.log('Current boothpartners height: ' +boothPartnersGridHeight);

    // Booth Partners Popin
    if (e['detail'].currentY > boothPartnersGridFromTop - (boothPartnersGridHeight / 1.15) ) {
      console.log('Booth Partners Popping In');
      this.boothPartnersPopIn = true;
    } else {
      this.boothPartnersPopIn = false;
    }

    // Parking Popin
    if (e['detail'].currentY > parkingGridFromTop - (parkingGridHeight / 1.15) ) {
      console.log('Parking Popping In');
      this.parkingPopIn = true;
    } else {
      this.parkingPopIn = false;
    }

    // FAQ Popin
    if (e['detail'].currentY > faqGridFromTop - (faqGridHeight / 1.15) ) {
      console.log('FAQ Popping In');
      this.faqPopIn = true;
    } else {
      this.faqPopIn = false;
    }

    if (e['detail'].currentY > surveyGridFromTop - (surveyGridHeight / 1.15) ) {
      console.log('Survey Popping In');
      this.surveyPopIn = true;
    } else {
      this.surveyPopIn = false;
    }
    // return (e.target as Element).scrollTop;
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
