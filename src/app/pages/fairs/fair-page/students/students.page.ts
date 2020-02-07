import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {


    // tslint:disable-next-line: radix
    const id  = this.activatedRoute.snapshot.paramMap.get('id');
  }



}
