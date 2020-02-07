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
  date;
  time;
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
       this.date = data['date'];
       this.time = data['time'];
       this.summary = data['summary'];
       this.description = data['description'];
       this.photo = data['summary'];
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

  students() {
    console.log('going to students page');
    this.router.navigate(['/fairs/fair/:id/students']);
  }

  chaperones() {
    console.log('going to chaperones page');
    this.router.navigate(['/fairs/fair/:id/chaperones']);
  }

  volunteers() {
    console.log('going to volunteers page');
    this.router.navigate(['/fairs/fair/:id/volunteers']);
  }

  partners() {
    console.log('going to partners page');
    this.router.navigate(['/fairs/fair/:id/partners']);
  }

}
