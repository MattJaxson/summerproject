import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
})
export class SelectionPage implements OnInit {
  fair: string;
  usertype: string;
  selectedFair = false;
  selectedUsertype = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  setFair() {
    this.fair = 'fair name';
    this.selectedFair = true;
    console.log(`setting the fair to ${this.fair}`);
  }

  setUsertype() {
    this.usertype = 'student';
    this.selectedUsertype = true;
    console.log(`setting the usertype to ${this.usertype}`);

  }

  fairPage(fair, usertype) {
    console.log('going to the fair page');
    this.router.navigate(['/fair-page', fair, usertype]);
  }

}
