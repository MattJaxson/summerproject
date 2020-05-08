import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})

export class LandingPage implements OnInit {

  slideOptions = {
    autoplay: {
      delay: 6000
    },
    speed: 500
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginSignup() {
    this.router.navigate(['login']);
  }

}
