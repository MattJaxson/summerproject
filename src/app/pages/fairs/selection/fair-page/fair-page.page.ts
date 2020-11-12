import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { format } from 'date-fns';
import { FairChaperoneRegisterPage } from 'src/app/modals/fair-chaperone-register/fair-chaperone-register.page';
import { FairPartnerRegisterPage } from 'src/app/modals/fair-partner-register/fair-partner-register.page';
import { FairStudentRegisterPage } from 'src/app/modals/fair-student-register/fair-student-register.page';
import { FairVolunteerRegisterPage } from 'src/app/modals/fair-volunteer-register/fair-volunteer-register.page';
import { FairsService } from 'src/app/services/fairs.service';



@Component({
  selector: 'app-fair-page',
  templateUrl: './fair-page.page.html',
  styleUrls: ['./fair-page.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FairPagePage implements OnInit, AfterViewInit {
  id: string;
  fairName: string;
  usertype: string;
  fairInfo;
  summary: string;
  description;
  date;
  city;
  state;
  zip;
  faqInfo;
  agenda;
  address: string;
  partners: any;

  // Popin Animation properties
  parking = false;
  parkingPopIn = false;
  boothPartners = false;
  boothPartnersPopIn = false;
  faq = false;
  faqPopIn = false;
  survey = false;
  surveyPopIn = false;

  surveyObject = {
    question1: {
      question: 'This is the question 1',
      answer: ''
    },
    question2: {
      question: 'This is the question 2',
      answer: ''
    },
    question3: {
      question: 'This is the question 3',
      answer: ''
    },
    question4: {
      question: 'This is the question 4',
      answer: ''
    },
    question5: {
      question: 'This is the question 5',
      answer: ''
    },
  };


  @ViewChild('info', {static: false})  infoGrid: ElementRef;
  @ViewChild('parking', {static: false})  parkingGrid: ElementRef;
  @ViewChild('boothPartners', {static: false})  boothPartnersGrid: ElementRef;
  @ViewChild('faq', {static: false})  faqGrid: ElementRef;
  @ViewChild('survey', {static: false})  surveyGrid: ElementRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private modal: ModalController,
    private fairs: FairsService) {
     }

  ngOnInit() {

    const id  = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = id;

    const fair  = this.activatedRoute.snapshot.paramMap.get('fair');
    this.fairName = fair;

    const usertype  = this.activatedRoute.snapshot.paramMap.get('usertype');
    this.usertype = usertype;

    const summary  = this.activatedRoute.snapshot.paramMap.get('summary');
    this.summary = summary;

    const date = this.activatedRoute.snapshot.paramMap.get('date');
    this.date = format(new Date(date), 'hh:mm a, MMMM dd, yyyy');

    const address = this.activatedRoute.snapshot.paramMap.get('address');
    this.address = address;

    const city = this.activatedRoute.snapshot.paramMap.get('city');
    this.city = city;

    const state = this.activatedRoute.snapshot.paramMap.get('state');
    this.state = state;

    const zip = this.activatedRoute.snapshot.paramMap.get('zip');
    this.zip = zip;

    const description = this.activatedRoute.snapshot.paramMap.get('description');
    this.description = description;

    const agenda = JSON.parse(this.activatedRoute.snapshot.paramMap.get('agenda'));
    this.agenda = agenda;

    const faqInfo = JSON.parse(this.activatedRoute.snapshot.paramMap.get('faq'));
    this.faqInfo = faqInfo;

    const partners = JSON.parse(this.activatedRoute.snapshot.paramMap.get('partners'));
    // In order for a partner to be shown on the UI, their 'verified' property must be set to 'true'
    this.partners = partners;
    console.log(partners);
    console.log(`This is the ${usertype} agenda.`);


    switch (usertype) {
      case 'student':
        this.boothPartners = true;
        // set survey to false until surveys have to be pushed out posts surcey
        this.survey = true;
        var parking = document.getElementById('parking');
        var faq = document.getElementById('faq');
        parking.style.height = '0px';
        faq.style.height = '0px';
        break;
      case 'chaperone':
        console.log('usertype: chaperone');
        this.boothPartners = true;
        // set survey to false until surveys have to be pushed out posts surcey
        this.survey = true;
        var parking = document.getElementById('parking');
        var faq = document.getElementById('faq');
        parking.style.height = '0px';
        faq.style.height = '0px';
        break;
      case 'volunteer':
        console.log('usertype: volunteer');
        this.parking = true;
        this.faq = true;
        // set survey to false until surveys have to be pushed out posts surcey
        this.survey = true;
        var booth = document.getElementById('boothPartners');
        booth.style.height = '0px';
        break;
      case 'partner':
        console.log('usertype: partner');
        this.parking = true;
        this.faq = true;
        // set survey to false until surveys have to be pushed out posts surcey
        this.survey = true;
        var booth = document.getElementById('boothPartners');
        booth.style.height = '0px';
        break;
      default:
        console.log('There was a problem getting the usertype');
        break;
    }
  }

  ngAfterViewInit() {

  }

  submitSurvey() {
    console.log(this.surveyObject);
  }

  question1Handler(e) {
    this.surveyObject.question1.answer = e.detail.value;
    console.log(this.surveyObject.question1);
   }

   question2Handler(e) {
    this.surveyObject.question2.answer = e.detail.value;
    console.log(this.surveyObject.question2);
   }

   question3Handler(e) {
    this.surveyObject.question3.answer = e.detail.value;
    console.log(this.surveyObject.question3);
   }

   question4Handler(e) {
    this.surveyObject.question4.answer = e.detail.value;
    console.log(this.surveyObject.question4);
   }

   question5Handler(e) {
    this.surveyObject.question5.answer = e.detail.value;
    console.log(this.surveyObject.question5);
   }

  getYPosition(e: Event) {
    // console.log(this.boothPartnersGrid);

    const boothPartnersGridFromTop = this.boothPartnersGrid.nativeElement.offsetTop;

    const parkingGridFromTop = this.parkingGrid.nativeElement.offsetTop;

    const faqGridFromTop = this.faqGrid.nativeElement.offsetTop;

    const surveyGridFromTop = this.surveyGrid.nativeElement.offsetTop;

    // console.log('Current Y position: ' + e['detail'].currentY);
    // console.log('Current boothpartners height: ' +boothPartnersGridHeight);

    // Booth Partners Popin
    if (e['detail'].currentY > boothPartnersGridFromTop - ((window.innerHeight / 1.2 )) && this.boothPartners ) {
      console.log('From Top: ' + boothPartnersGridFromTop);
      console.log('Booth Partners Popping In');
      this.boothPartnersPopIn = true;
    } else {
      this.boothPartnersPopIn = false;
    }

    // Parking Popin
    if (e['detail'].currentY > parkingGridFromTop - ((window.innerHeight / 1.2 )) && this.parking ) {
      console.log('Parking Popping In');
      this.parkingPopIn = true;
    } else {
      this.parkingPopIn = false;
    }

    // FAQ Popin
    if (e['detail'].currentY > faqGridFromTop - ((window.innerHeight / 1.2 )) && this.faq ) {
      console.log('FAQ Popping In');
      this.faqPopIn = true;
    } else {
      this.faqPopIn = false;
    }

    if (e['detail'].currentY > surveyGridFromTop - ((window.innerHeight / 1.2)) && this.survey ) {
      console.log('Survey Popping In');
      this.surveyPopIn = true;
    } else {
      this.surveyPopIn = false;
    }
  }

  async register(id) {

    // Student
    if(this.usertype === 'student') {
      const registerModalConfig = await this.modal.create({
        component: FairStudentRegisterPage,
        componentProps: {
          id,
          city: this.city,
          state: this.state,
          zip: this.zip,
          address: this.address,
          fairName: this.fairName,
          date: this.date
        }

      });
      await registerModalConfig.present();
    }

    // Chaperone
    if (this.usertype === 'chaperone') {
      const registerModalConfig = await this.modal.create({
        component: FairChaperoneRegisterPage,
        componentProps: {
          id
        }
      });
      await registerModalConfig.present();
    }

    // Volunteer
    if (this.usertype === 'volunteer') {
      const registerModalConfig = await this.modal.create({
        component: FairVolunteerRegisterPage,
        componentProps: {
          id
        }
      });
      await registerModalConfig.present();
    }

    // Partner
    if (this.usertype === 'partner') {
      const registerModalConfig = await this.modal.create({
        component: FairPartnerRegisterPage,
        componentProps: {
          id
        }
      });
      await registerModalConfig.present();
    }
  }

}
