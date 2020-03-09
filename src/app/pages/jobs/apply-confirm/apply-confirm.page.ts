import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apply-confirm',
  templateUrl: './apply-confirm.page.html',
  styleUrls: ['./apply-confirm.page.scss'],
})
export class ApplyConfirmPage implements OnInit {
  public jobTitle;
  public jobCompanyName;
  public jobCompanyEmail;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const title  = this.activatedRoute.snapshot.paramMap.get('title');
    // tslint:disable-next-line: radix
    const companyName  = this.activatedRoute.snapshot.paramMap.get('companyName');
    const companyEmail  = this.activatedRoute.snapshot.paramMap.get('companyEmail');


    this.jobTitle = title;
    this.jobCompanyName = companyName;
    this.jobCompanyEmail = companyEmail;

  }

  backHome() {
    this.router.navigate(['/home']);
  }

}
