import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FairsService } from 'src/app/services/fairs.service';


@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
})
export class SelectionPage implements OnInit {
  [x: string]: any;
  fair: string;
  allFairs;
  usertype: string;
  selectedFair = false;
  selectedUsertype = false;
  agenda: any;
  description: any;
  summary: any;
  faq: any;
  date: any;
  city: any;
  zip: any;
  state: any;
  address: any;
  partners: any;

  constructor(
    private router: Router,
    private fairs: FairsService
  ) { }

  ngOnInit() {
    this.fairs.getFairs().subscribe(
      fairs => {
        this.allFairs = Object.values(fairs);
        console.log(typeof fairs);
        console.log(this.allFairs);
      });
  }

  setFair(fair) {
    this.fair = fair.detail.value;
    this.selectedFair = true;
    console.log(`setting the fair to ${this.fair}`);
  }

  setUsertype(usertype) {
    console.log(usertype);
    this.usertype = usertype.detail.value;
    this.selectedUsertype = true;
    console.log(`setting the usertype to ${this.usertype}`);

    this.allFairs.find(fair => {
      this.id = fair._id;
      this.date = fair.date;
      this.fair = fair.title;
      this.summary = fair.summary;
      this.address = fair.address;
      this.city = fair.city;
      this.state = fair.state;
      this.zip = fair.zip;

      switch (this.usertype) {
        case 'student':
          this.agenda = JSON.stringify(fair.studentAgenda);
          this.description = fair.studentDescription;
          this.faq = JSON.stringify(fair.studentFAQ);
          this.partners = JSON.stringify(fair.partners);
          console.log('Student');
          break;
        case 'chaperone':
          this.agenda = JSON.stringify(fair.chaperoneAgenda);
          this.description = fair.chaperoneDescription;
          this.faq = JSON.stringify(fair.chaperoneFAQ);
          this.partners = JSON.stringify(fair.partners);
          console.log('Chaperone');
          break;
        case 'volunteer':
          this.agenda = JSON.stringify(fair.volunteerAgenda);
          this.description = fair.volunteerDescription;
          this.faq = JSON.stringify(fair.volunteerFAQ);
          this.partners = JSON.stringify(fair.partners);
          console.log('Volunteers');
          break;
        case 'partner':
          this.agenda = JSON.stringify(fair.partnerAgenda);
          this.description = fair.partnerDescription;
          this.faq = JSON.stringify(fair.partnerFAQ);
          this.partners = JSON.stringify(fair.partners);
          console.log('Partner');
          break;
        default:
          break;
      }
      return;
    });

  }

  fairPage() {
    console.log('going to the fair page');
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/fair-page', this.id, this.fair, this.date, this.address, this.city, this.state, this.zip, this.usertype, this.summary, this.description, this.agenda, this.faq, this.partners]);
  }

}
