import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../../services/events.service';
import { ProfileService } from 'src/app/services/profile.service';
import { format, formatDistanceToNow } from 'date-fns';
import { ToastController, AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { EventsEventEmitterService } from 'src/app/emitters/events-event-emitter.service';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-going',
  templateUrl: './going.page.html',
  styleUrls: ['./going.page.scss'],
})
export class GoingPage implements OnInit {
  goingToEvents = [];
  userEmail;
  id;

  constructor(
    private router: Router,
    private events: EventsService,
    private profile: ProfileService,
    private cdr: ChangeDetectorRef,
    private toast: ToastController,
    private alert: AlertController,
    private eventEmitterService: EventsEventEmitterService,
    private location: PlatformLocation
    ) { }

  ngOnInit() {

    this.location.onPopState(() => {
      this.eventEmitterService.onBackAction();
    });

    // Get the User's details
    this.profile.getUserDetails().subscribe(
     details => {
       this.id = details['_id'];
       this.userEmail = details['email'];
       this.events.eventsGoing$.subscribe(
         events => {
           this.goingToEvents = events;
         });

       console.log('getting event user ' + this.id + ' is going to');
       this.refreshGoingEvents();
     });
  }

  eventPage(event) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne,  event.addressOne,  event.city,  event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
  }

  goBack() {
    this.eventEmitterService.onBackAction();
    this.router.navigate(['/home/events']);
  }

  cancel(eventID) {
    console.log(eventID);
    console.log(`Removing ${eventID} from this Users eventsGoing property`);
    this.events.notGoingToEvent(eventID, this.userEmail, this.id).subscribe( events => {

      const eventsGoing = this.events.eventsGoing$.getValue();

      for (let i = 0; i < eventsGoing.length; i++) {
        if (eventsGoing[i] === eventID) {
          eventsGoing.splice(i, 1);
        }
      }
      console.log(eventsGoing);
      this.goingToEvents = eventsGoing;
      this.events.eventsGoing$.next(eventsGoing);
      this.eventEmitterService.resetEvents();
      this.presentNotGoingToast();
      }
    );
  }

  refreshGoingEvents() {
    this.events.getEventsGoing(this.id).subscribe( eventsGoing => {
        this.goingToEvents = Object.values(eventsGoing);
        this.goingToEvents.reverse();
        console.log(`Updated events going list: ${this.goingToEvents}`);

        for (const event of this.goingToEvents) {
          event.date = format( new Date(event.date), 'MMMM dd, yyyy');
          event.time = format( new Date(event.date), 'hh:mm a');
          event.dateCreated = formatDistanceToNow( new Date(event.dateCreated), {
            includeSeconds: true,
            addSuffix: true
          });
        }
      });
  }

  async presentNotGoingToast() {
    const toast = await this.toast.create({
      message: 'You are no longer going to event. It has been removed from your "Going" list',
      duration: 2000
    });
    toast.present();
  }


  async presentAlertMultipleButtons(eventID) {
    const alert = await this.alert.create({
      header: 'Are you sure you want to delete this from My Events?',
      buttons: [{
        text: 'Yes',
        handler: () => {
          this.cancel(eventID);
          return true;
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('confirm cancel');
        }
      }]
    });

    await alert.present();

  }

}
