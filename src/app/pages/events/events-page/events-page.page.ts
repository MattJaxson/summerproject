import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { EventsService } from '../../../services/events.service';
import { ProfileService } from '../../../services/profile.service';
import { EventsEventEmitterService } from 'src/app/emitters/events-event-emitter.service';
import { PlatformLocation } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.page.html',
  styleUrls: ['./events-page.page.scss'],
})
export class EventsPagePage implements OnInit, OnDestroy {

  id;
  userEmail;
  going = false;

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

  eventsSub: Subscription;
  goingToEventSub: Subscription;
  notGoingToEventSub: Subscription;
  profileSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private events: EventsService,
    private profile: ProfileService,
    private router: Router,
    private toastController: ToastController,
    private eventEmitterService: EventsEventEmitterService,
    private location: PlatformLocation
    ) { }

  ngOnDestroy(): void {
      this.eventsSub.unsubscribe();
      this.eventsGoingSub.unsubscribe();
      this.eventEmitterService.subsVar.unsubscribe();
      this.deleteEventSub.unsubscribe();
    }

  ngOnInit() {

    this.location.onPopState(() => {
      this.eventEmitterService.onBackAction();
    });

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

    this.profileSub = this.profile.getUserDetails().subscribe(
      details => {

        // Get all the events that the user is going to.

        this.id = details['_id'];
        let eventsGoing = details['eventsGoing'];
        console.log(eventsGoing);

        if (eventsGoing.includes(this.eventId)) {
          this.going = true;
        } else {
          this.going = false;
        }

        console.log();
      }
    );
  }

  goingToEvent() {

    this.going = true;
    this.presentGoingToast();
    console.log(`Adding ${this.eventId} to this Users eventsGoing property`);

    this.goingToEventSub = this.events.goingToEvent(this.eventId, this.userEmail, this.id)
      .subscribe(events => {

        let updatedEvents = [...Object.values(events['eventsGoing']), this.eventId];
        this.events.eventsGoing$.next(updatedEvents);
        console.log(this.events.eventsGoing$.getValue());

        // this.events.getEventsGoing(this.id).subscribe(
        //   eventsGoing => {
        //     console.log(eventsGoing);
        //   }
        // );
    });
  }

  notGoingToEvent() {
    this.going = false;
    this.presentNotGoingToast();
    console.log(`Removing ${this.eventId} from this Users eventsGoing property`);;
    this.notGoingToEventSub = this.events.notGoingToEvent(this.eventId, this.userEmail, this.id).subscribe(
      events => {
        const eventsGoing = this.events.eventsGoing$.getValue();

        for (let i = 0; i < eventsGoing.length; i++) {
          if (eventsGoing[i] === this.eventId) {
            eventsGoing.splice(i, 1);
          }
        }
        console.log(eventsGoing);

        this.events.eventsGoing$.next(eventsGoing);
      }
    );
  }

  callEventEmitter() {
    this.eventEmitterService.onBackAction();
  }

  async presentGoingToast() {
    const toast = await this.toastController.create({
      message: 'You are going to this Event. It has been saved to your "Going" list',
      duration: 2000
    });
    toast.present();
  }

  async presentNotGoingToast() {
    const toast = await this.toastController.create({
      message: 'You are no longer going to event. It has been removed from your "Going" list',
      duration: 2000
    });
    toast.present();
  }


}
