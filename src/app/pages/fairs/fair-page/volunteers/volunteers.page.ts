import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.page.html',
  styleUrls: ['./volunteers.page.scss'],
})
export class VolunteersPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['/fairs/fair/:id/volunteers/register']);
  }

}
