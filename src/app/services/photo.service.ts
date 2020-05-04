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

  async getSingleFile(filePath: string): Promise<File> {
    // Get FileEntry from image path
    const fileEntry: FileEntry = await this.ionicFileService.resolveLocalFilesystemUrl(filePath) as FileEntry;
    // console.log('This is the fileEntry path: ' + JSON.stringify(fileEntry));

    // Get File from FileEntry. Again note that this file does not contain the actual file data yet.
    const cordovaFile: IFile = await this.convertFileEntryToCordovaFile(fileEntry);
    // console.log('This is the cordova file: ' + JSON.stringify(cordovaFile));

    // Use FileReader on the File object to populate it with the true file contents.
    return this.convertCordovaFileToJavascriptFile(cordovaFile);
  }

  private convertFileEntryToCordovaFile(fileEntry: FileEntry): Promise<IFile> {
    return new Promise<IFile>((resolve, reject) => {
      fileEntry.file(resolve, reject);
    });

  }

  private convertCordovaFileToJavascriptFile(cordovaFile: IFile): Promise<File> {
    return new Promise<File>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.error) {
          reject(reader.error);
        } else {
          const blob: any = new Blob([reader.result], { type: cordovaFile.type });
          blob.lastModifiedDate = new Date();
          blob.name = cordovaFile.name;
          // console.log('blob: ' + JSON.stringify(blob));
          resolve(blob as File);
        }
      };
      reader.readAsArrayBuffer(cordovaFile);
      // console.log(JSON.stringify('reader: ' + JSON.stringify(reader)));
    });
  }

  // Testing
  imageUpload(imageForm: FormData) {
    console.log('image uploading');
    return this.http.post('http://10.0.1.16:3000/api/photo/upload-profile-picture',
    imageForm);
   }

}
