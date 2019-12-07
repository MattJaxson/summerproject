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

  backToProfilePage() {
    console.log('Going back to Profile Page');
    this.router.navigate(['/home/profile']);
  }

  cancel() {
    console.log('change email password cancelled');
    this.router.navigate(['/home/profile']);
  }

}