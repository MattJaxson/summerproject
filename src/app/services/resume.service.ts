import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ResumeService {

  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient
  ) {

  }
  resumeUpload(resumeForm) {
    console.log('resume uploading');
    return this.http.post(`${this.BACKEND_URL}/api/resume/upload-resume`,
    resumeForm);
   }

   changeResume(imageForm) {
    console.log(imageForm);
    return this.http.post(`${this.BACKEND_URL}/api/resume/change-resume`,
    imageForm);
   }

}
