import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage';
import { File as IonicFileService, FileEntry, IFile } from '@ionic-native/file/ngx';



@Injectable({
  providedIn: 'root'
})

export class PhotoService {
  constructor(
    private ionicFileService: IonicFileService,
    private http: HttpClient
  ) {

  }
  // Testing
  imageUpload(imageForm: FormData) {
    console.log('image uploading');
    return this.http.post('http://10.0.1.16:3000/api/photo/upload-profile-picture',
    imageForm);
   }

}
