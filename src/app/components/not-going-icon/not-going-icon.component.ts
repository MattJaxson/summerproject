import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { EventsService } from '../../services/events.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-not-going-icon',
  templateUrl: './not-going-icon.component.html',
  styleUrls: ['./not-going-icon.component.scss'],
  animations: [

    trigger('notGoing', [
        state('not-going', style({
            color: '#e4405f',
            opacity: '0.4',
            transition: '0.5s',
            transform: 'scale(0.9)'
        })),
        state('not-not-going', style({
            color: '#21ce99',
            opacity: '1',
            transition: '0.5s',
            transform: 'scale(1)'

        })),

        transition('not-going <=> ot-not-going', animate('100ms ease-out'))
    ])
  ]
})

export class NotGoingIconComponent implements OnInit {

  notGoingState = 'not-going';
  public iconName = 'add-circle';
  @Input() event;
  @Input() userEmail;
  @Input() id;

  constructor(
    private events: EventsService,
    private toast: ToastController) { }

  ngOnInit() {}

  toggleNotGoingState(event) {

    if (this.notGoingState === 'not-going') {

      this.notGoingState = 'going';
      this.iconName = 'close-circle-outline';
      this.goingToast();
      console.log(`Going to event, ${event.title}`);
      this.events.goingToEvent(event._id, this.userEmail, this.id).subscribe();


    } else {

      this.notGoingState = 'not-not-going';
      this.iconName = 'add-circle-outline';
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
