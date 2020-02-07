import { Component, OnInit } from '@angular/core';
import { FairsService } from 'src/app/services/fairs.service';
import { format, formatDistanceToNow } from 'date-fns';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.page.html',
  styleUrls: ['./fairs.page.scss'],
})
export class FairsPage implements OnInit {

  allFairs;

  constructor(
    private router: Router,
    private fairs: FairsService
  ) { }

  ngOnInit() {
    this.fairs.getFairs().subscribe(
      data => {
        this.allFairs = Object.values(data);
        console.log(this.allFairs);

        for (const fair of this.allFairs) {
          fair.date = format( new Date(fair.date), 'MMMM dd, yyyy');
          fair.time = format( new Date(fair.date), 'hh:mm a');
          fair.dateCreated = formatDistanceToNow( new Date(fair.dateCreated), {
            includeSeconds: true,
            addSuffix: true
          });
        }
      }
    );
  }

  fairPage(id) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/fairs/fair', id]);
  }

}
