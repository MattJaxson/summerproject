import { Component, OnInit } from '@angular/core';
import { FairsService } from 'src/app/services/fairs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { format, formatDistanceToNow } from 'date-fns';


@Component({
  selector: 'app-fair-page',
  templateUrl: './fair-page.page.html',
  styleUrls: ['./fair-page.page.scss'],
})
export class FairPagePage implements OnInit {

  id;
  title;
  address;
  date;
  time;
  city;
  state;
  zip;
  summary;
  description;
  dateCreated;
  photo;
  schools;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fairs: FairsService) { }

  ngOnInit() {

    // tslint:disable-next-line: radix
    const id  = this.activatedRoute.snapshot.paramMap.get('id');

    this.id = id;
    console.log(this.id);

    this.fairs.getFair(this.id).subscribe(
      data => {
       console.log(data);
       this.title = data['title'];
       this.address = data['address'];
       this.date = data['date'];
       this.city = data['city'];
       this.state = data['state'];
       this.zip = data['zip'];
       this.time = data['time'];
       this.summary = data['summary'];
       this.description = data['description'];
       this.photo = data['photo'];
       this.dateCreated = data['dateCreated'];

       this.date = format( new Date(this.date), 'MMMM dd, yyyy');
       this.time = format( new Date(this.date), 'hh:mm a');
       this.dateCreated = formatDistanceToNow( new Date(this.dateCreated), {
          includeSeconds: true,
          addSuffix: true
        });
      }
    );
  }

  goBack() {
    console.log('going back');
    this.router.navigate(['/fairs']);
  }

  students() {
    console.log('going to students page');
    this.router.navigate(['/fairs/fair/:id/students', this.id]);
  }

  chaperones() {
    console.log('going to chaperones page');
    this.router.navigate(['/fairs/fair/:id/chaperones', this.id]);
  }

  volunteers() {
    console.log('going to volunteers page');
    this.router.navigate(['/fairs/fair/:id/volunteers', this.id]);
  }

  partners() {
    console.log('going to partners page');
    this.router.navigate(['/fairs/fair/:id/partners', this.id]);
  }

}
