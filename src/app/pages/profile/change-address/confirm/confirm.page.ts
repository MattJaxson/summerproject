import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  backToProfile() {
    this.router.navigate(['home/profile']);
  }

}
