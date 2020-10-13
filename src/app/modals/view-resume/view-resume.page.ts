// Modal
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ProfileService } from 'src/app/services/profile.service';
import { ModalController } from '@ionic/angular';
import { UploadResumeModalPage } from '../upload-resume-modal/upload-resume-modal.page';



@Component({
  selector: 'app-view-resume',
  templateUrl: './view-resume.page.html',
  styleUrls: ['./view-resume.page.scss'],
})
export class ViewResumePage implements OnInit {
  resume: string;

  constructor(
    private router: Router,
    private _modal: ModalController,
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

  back() {
    this.router.navigate(['/home/profile']);
  }

  async uploadResumeModal() {
    const modal = await this._modal.create({
      component: UploadResumeModalPage,
      cssClass: 'my-custom-class'
    });
    await modal.present();
  }


  cancel() {
    this._modal.dismiss();
  }

}
