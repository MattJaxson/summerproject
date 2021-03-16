import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { EventsService } from '../../services/events.service';
import { ToastController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';
import { FavoritesService } from 'src/app/services/favorites.service';
import { EventsEventEmitterService } from 'src/app/emitters/events-event-emitter.service';



@Component({
  selector: 'app-going-icon',
  templateUrl: './going-icon.component.html',
  styleUrls: ['./going-icon.component.scss'],
  animations: [

    trigger('going', [
        state('going', style({
            color: 'blue',
            opacity: '0.4',
            transition: '0.5s',
            transform: 'scale(0.9)'
        })),
        state('not-going', style({
            color: '#21ce99',
            opacity: '1',
            transition: '0.5s',
            transform: 'scale(1)'

        })),

        transition('not-going <=> going', animate('100ms ease-out'))
    ])
  ]
})
export class GoingIconComponent implements OnInit {

  going = false;
  goingState = 'not-going';
  public iconName = 'add-circle-outline';
  @Input() event;
  @Input() userEmail;
  @Input() id;

  constructor(
    private events: EventsService,
    private eventsEventEmitterService: EventsEventEmitterService,
    private toast: ToastController,
    private router: Router,
    private profile: ProfileService) { }

  ngOnInit() {

    // Get the User's details
    this.profile.getUserDetails().subscribe(
     details => {

       this.userEmail = details['email'];
       let eventsGoing = details['eventsGoing'];
       
       if (eventsGoing.includes(this.event._id)) {
         this.going = true;
         this.goingState = 'going';
       } else {
         this.going = false;
         this.goingState = 'not-going';
       }

     });
  }

  toggleGoingState(event) {

    if (this.goingState === 'not-going') {

      // Going
      this.goingState = 'going';
      this.iconName = 'close-circle-outline';
      this.going = true;
      this.goingToast();
      console.log(`Going to event, ${event.title}`);


      this.events.goingToEvent(event._id, this.userEmail, this.id).subscribe(events => {

        let updatedEvents = [...Object.values(events['eventsGoing']), this.event._id];
        this.events.eventsGoing$.next(updatedEvents);
        console.log(this.events.eventsGoing$.getValue());

      });


    } else {

      // Not Going
      this.goingState = 'not-going';
      this.iconName = 'add-circle-outline';
      this.going = false;
      this.notGoingToast();
      console.log('No longer going to Event');
      this.events.notGoingToEvent(event._id, this.userEmail, this.id).subscribe(events => {
        const eventsGoing = this.events.eventsGoing$.getValue();

        for (let i = 0; i < eventsGoing.length; i++) {
          if (eventsGoing[i] === this.event._id) {
            eventsGoing.splice(i, 1);
          }
        }
        console.log(eventsGoing);

        this.events.eventsGoing$.next(eventsGoing);

      });

    }

  }

  async goingToast() {
    const toast = await this.toast.create({
      message: 'You are going to this event.',
      duration: 2000
    });
    toast.present();
  }

  async notGoingToast() {
    const toast = await this.toast.create({
      message: 'You are no longer going to this event.',
      duration: 2000
    });
    toast.present();
  }

  eventPage(event) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne,  event.addressOne,  event.city,  event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
  }

}
