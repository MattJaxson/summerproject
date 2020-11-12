import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../../services/profile.service';
import { ResumeService } from '../../../../services/resume.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-update-resume',
  templateUrl: './update-resume.page.html',
  styleUrls: ['./update-resume.page.scss'],
})
export class UpdateResumePage implements OnInit {

  formData: FormData;
  uploadedResume: boolean;
  userProPicUrl = this.profile.resume.getValue();
  awsPrefix = this.userProPicUrl.slice(-51);
  uploadedPhotoURL: string | ArrayBuffer;
  userEmail: string;


  constructor(
    private resume: ResumeService,
    private router: Router,
    private profile: ProfileService,
    private alert: AlertController,
    private toast: ToastController,
    private loading: LoadingController) { }

  ngOnInit() {
    this.profile.getUserDetails()
      .subscribe(
        data => {
          this.userEmail = data['email'];
          console.log(this.userEmail);
        }
      );
  }

  back() {
    this.router.navigate(['/home/profile/view-resume']);
  }

  getFormData(event) {
    const formElement = document.querySelectorAll('form');
    formElement.forEach(form => {
     if ( form.id === 'changeResumeForm') {
       console.log('Got Form: ' + form);
       this.formData = new FormData(form);
       this.uploadedResume = true;
     }
    });

    console.log(this.formData);

    let reader = new FileReader();
    reader.addEventListener('load',  () => {
      // convert image file to base64 string
      this.uploadedPhotoURL = reader.result;
    }, false);

    if (formElement) {
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  uploadResume() {
    const formElement = document.querySelectorAll('form');
    formElement.forEach(form => {
     if ( form.id === 'changeResumeForm') {
       console.log('Got Form: ' + form);
       this.formData = new FormData(form);
       this.formData.append('oldResumeKey', this.awsPrefix);
       this.formData.append('email', this.userEmail);
     }
    });

    this.resume.changeResume(this.formData).subscribe(
       async data => {
         console.log(data);
         let newResume = data['objectUrl'];
         console.log(newResume);
         await this.presentLoading();
         await this.profile.resume.next(newResume);
         await this.presentToast();
         await this.router.navigate(['/home/profile/view-resume']);
       }
     );
   }

   async presentToast() {
    const toast = await this.toast.create({
      message: 'Your Resume has been changed',
      animated: true,
      cssClass: 'updated-toast',
      duration: 2000
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Updating Resume...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
