import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.page.html',
  styleUrls: ['./events-page.page.scss'],
})
export class EventsPagePage implements OnInit {

  userEmail;

  eventId;
  eventTitle;
  eventAddressOne;
  eventAddressTwo;
  eventCity;
  eventState;
  eventZip;
  eventDateCreated;
  eventDate;
  eventTime;
  eventDescription;
  eventPhoto;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
    ) { }

  ngOnInit() {
      // tslint:disable-next-line: radix
      const id  = this.activatedRoute.snapshot.paramMap.get('id');
      // tslint:disable-next-line: radix
      const title  = this.activatedRoute.snapshot.paramMap.get('title');
      // tslint:disable-next-line: radix
      const addressOne  = this.activatedRoute.snapshot.paramMap.get('addressOne');
      // tslint:disable-next-line: radix
      const addressTwo  = this.activatedRoute.snapshot.paramMap.get('addressTwo');
      // tslint:disable-next-line: radix
      const city  = this.activatedRoute.snapshot.paramMap.get('city');
      // tslint:disable-next-line: radix
      const state  = this.activatedRoute.snapshot.paramMap.get('state');
      // tslint:disable-next-line: radix
      const zip  = this.activatedRoute.snapshot.paramMap.get('zip');
      // tslint:disable-next-line: radix
      const date  = this.activatedRoute.snapshot.paramMap.get('date');
      // tslint:disable-next-line: radix
      const dateCreated  = this.activatedRoute.snapshot.paramMap.get('dateCreated');
      // tslint:disable-next-line: radix
      const time  = this.activatedRoute.snapshot.paramMap.get('time');
       // tslint:disable-next-line: radix
      const description  = this.activatedRoute.snapshot.paramMap.get('description');
       // tslint:disable-next-line: radix
      const photo  = this.activatedRoute.snapshot.paramMap.get('photo');
        // tslint:disable-next-line: radix

      this.eventId = id;
      this.eventTitle = title;
      this.eventAddressOne = addressOne;
      this.eventAddressTwo = addressTwo;
      this.eventCity = city;
      this.eventState = state;
      this.eventZip = zip;
      this.eventDateCreated = dateCreated;
      this.eventDate = date;
      this.eventTime = time;
      this.eventDescription = description;
      this.eventPhoto = photo;
  }

  async presentGoingToast() {
    const toast = await this.toastController.create({
      message: 'You have added this event to your "Going" list.',
      duration: 2000
    });
    toast.present();
  }

  googleMaps() {
    console.log('Google Maps');
  }

}
