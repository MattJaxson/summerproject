import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../../services/events.service';
import { ProfileService } from 'src/app/services/profile.service';
import { format, formatRelative } from 'date-fns';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-going',
  templateUrl: './going.page.html',
  styleUrls: ['./going.page.scss'],
})
export class GoingPage implements OnInit {
  goingToEvents;
  userEmail;
  id;

  constructor(
    private router: Router,
    private events: EventsService,
    private profile: ProfileService,
    private toast: ToastController) { }

  ngOnInit() {

    // Get the User's details
    this.profile.getUserDetails().subscribe(
     details => {

       this.id = details['_id'];
       this.userEmail = details['email'];

       this.events.getEventsGoing(this.id).subscribe( events => {
        this.goingToEvents = Object.values(events);
        this.goingToEvents.reverse();

      // for (const event of this.goingToEvents) {
      //   event.date = format( new Date(event.date), 'MMMM-dd-yyyy');
      //   event.dateCreated = formatRelative( new Date(event.dateCreated), new Date(event.dateCreated));
      //   event.time = format( new Date(event.date), 'hh:mm a');
      // }
    });
     });
  }

  eventPage(event) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne,  event.addressOne,  event.city,  event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
  }

}
