import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { EventsService } from '../../services/events.service';
import { ToastController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-going-icon',
  templateUrl: './going-icon.component.html',
  styleUrls: ['./going-icon.component.scss'],
  animations: [

    trigger('going', [
        state('going', style({
            color: '#e4405f',
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
  public iconName = 'add-circle';
  @Input() event;
  @Input() userEmail;
  @Input() id;

  constructor(
    private events: EventsService,
    private toast: ToastController,
    private profile: ProfileService,) { }

  ngOnInit() {

    // Get the User's details
    this.profile.getUserDetails().subscribe(
     details => {

       this.userEmail = details['email'];

     });

    console.log(this.id);
    console.log(this.event['_id']);
    this.events.getEventsGoing(this.id).subscribe(
      data => {

       this.events.eventsGoing$.next(data['eventsGoing']);
       console.log(data);
      }
    );
  }

  toggleGoingState(event) {

    if (this.goingState === 'not-going') {

      this.goingState = 'going';
      this.iconName = 'close-circle-outline';
      this.going = true;
      this.goingToast();
      console.log(`Going to event, ${event.title}`);
      this.events.goingToEvent(event._id, this.userEmail, this.id).subscribe();


    } else {

      this.goingState = 'not-going';
      this.iconName = 'add-circle-outline';
      this.going = false;
      this.notGoingToast();
      console.log('No longer going to Event');
      this.events.notGoingToEvent(event._id, this.userEmail, this.id).subscribe();

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

}
