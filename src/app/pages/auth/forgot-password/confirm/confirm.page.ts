import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage {

  constructor(
    private router: Router) { }

  goToLogin() {
    this.router.navigate(['']);
  }

}
