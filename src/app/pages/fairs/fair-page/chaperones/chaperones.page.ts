import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chaperones',
  templateUrl: './chaperones.page.html',
  styleUrls: ['./chaperones.page.scss'],
})
export class ChaperonesPage implements OnInit {

  id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id  = this.activatedRoute.snapshot.paramMap.get('id');
  }

  register() {
    this.router.navigate(['/fairs/fair/:id/chaperones/:id/register', this.id]);
  }

}
