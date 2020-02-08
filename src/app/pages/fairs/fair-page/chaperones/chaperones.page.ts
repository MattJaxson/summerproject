import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chaperones',
  templateUrl: './chaperones.page.html',
  styleUrls: ['./chaperones.page.scss'],
})
export class ChaperonesPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['/fairs/fair/:id/chaperones/register']);
  }

}
