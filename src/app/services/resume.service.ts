import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class ResumeService {

  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient,
    private toast: ToastController,
    private auth: AuthService,
    private router: Router
  ) {

  }
  resumeUpload(resumeForm) {
    console.log('resume uploading');
    return this.http.post(`${this.BACKEND_URL}/api/resume/upload-resume`,
    resumeForm).pipe(
      tap(),
      catchError(e => {
        console.log(e.error.msg)
        if (e.error.msg === 'File needs to be a .pdf file') {
          this.wrongFileTypeToast('Resume needs to be a .pdf file.');
          return e;
        }
      })).subscribe(
        data => {
          console.log(data['objectUrl']);
          return this.goToCredentialsPage(data['objectUrl']);
        });
   }
   async wrongFileTypeToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
      cssClass: 'danger-toast',
    });
    toast.present();
  }
  goToCredentialsPage(resume) {
    this.auth.getResume(resume);
    console.log('Going to Credentials Page');
    this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials']);
  }
   changeResume(imageForm) {
    console.log(imageForm);
    return this.http.post(`${this.BACKEND_URL}/api/resume/change-resume`,
    imageForm);
   }

}
