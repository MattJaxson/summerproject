import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../../../services/profile.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-view-resume',
  templateUrl: './view-resume.page.html',
  styleUrls: ['./view-resume.page.scss'],
})
export class ViewResumePage implements OnInit {
  resume: string;
  

  constructor(
    private router: Router,
    private profile: ProfileService,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.profile.getUserDetails()
      .subscribe( data => {
        console.log(data);
        this.profile.resume.next(data['resume']);
      });


    this.profile.resume.subscribe(data => {
        this.resume = data;
      });
  }

  sanitizeImageUrl(imageUrl: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(imageUrl);
}
goBack() {
  this.router.navigate(['/home/profile']);
}

  updateResume() {
    console.log('Updating Resume from View Resume page');
    this.router.navigate(['/home/profile/update-resume']);
  }

}
