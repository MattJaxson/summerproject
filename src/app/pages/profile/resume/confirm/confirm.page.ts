import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }
  goBackToProfile() {
    console.log('Updating Resume from View Resume page');
    this.router.navigate(['/home/profile']);
  }

}
