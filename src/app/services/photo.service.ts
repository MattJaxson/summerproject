import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  BACKEND_URL = environment.url;
  constructor(
    private http: HttpClient
  ) {

  }
  // Testing
  imageUpload(imageForm) {
    console.log('image uploading');
    console.log(imageForm);
    return this.http.post(`${this.BACKEND_URL}/api/photo/upload-profile-picture`,
    imageForm);
   }

   changeProfilePicture(imageForm) {
    console.log(imageForm);
    return this.http.post(`${this.BACKEND_URL}/api/photo/change-profile-picture`,
    imageForm);
   }

   updatePostPhotos(newPhoto, email) {
    console.log(newPhoto);
    return this.http.post(`${this.BACKEND_URL}/api/photo/update-all-post-pictures`,
    newPhoto, email).subscribe();
   }

   boothPartnerLogo(logo) {
    console.log('both partner uploading');
    console.log(logo);
    return this.http.post(`${this.BACKEND_URL}/api/photo/upload-booth-partner-logo`,
    logo);

   }

}
