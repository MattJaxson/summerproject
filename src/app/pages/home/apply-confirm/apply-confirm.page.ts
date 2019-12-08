import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apply-confirm',
  templateUrl: './apply-confirm.page.html',
  styleUrls: ['./apply-confirm.page.scss'],
})
export class ApplyConfirmPage implements OnInit {
  public jobName;
  public jobCompanyName;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const name  = this.activatedRoute.snapshot.paramMap.get('name');
    // tslint:disable-next-line: radix
    const companyName  = this.activatedRoute.snapshot.paramMap.get('companyName');


    this.jobName = name;
    this.jobCompanyName = companyName;
  }

  backHome() {
    this.router.navigate(['/home']);
  }

}
