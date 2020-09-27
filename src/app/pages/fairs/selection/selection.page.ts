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

  }

  fairPage() {
    console.log('going to the fair page');
    this.router.navigate(['/fair-page', this.fair, this.usertype]);
  }

}
