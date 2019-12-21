import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { ProfileService } from '../../../../services/profile.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-change-profile-picture',
  templateUrl: './change-profile-picture.page.html',
  styleUrls: ['./change-profile-picture.page.scss'],
})
export class ChangeProfilePicturePage implements OnInit {
  changePicture: FormGroup;
  activeEmail = '';
  activePicture = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private profile: ProfileService,
    private activatedRoute: ActivatedRoute,
    private camera: Camera,
    ) { }

  ngOnInit() {

    const picture  = this.activatedRoute.snapshot.paramMap.get('profilePicture');

    this.activePicture = picture;
  }

    confirmChangeProfilePicture() {

      // console.log('Going to Change Picture Confirm');
      // this.router.navigate(['/home/profile/change-profile-picture/confirm']);
    }

    cancel() {
      console.log('change phone number cancelled');
      this.router.navigate(['/home/profile']);
    }

    // Not finished
    useCamera() {

      let options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
      };

      this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        // This is the actual picture
        this.activePicture = (window as any).Ionic.WebView.convertFileSrc(imageData);
       }, (err) => {
        alert('error ' + JSON.stringify(err));
       });
      console.log("Accessing Phone's Camera to gather Photo");

      // this.router.navigate(['/home/profile/confirm-photo']);
    }

    // Not finished
    upload() {
      console.log("Accessing Phone's File System to gather Photo");
      this.router.navigate(['/home/profile/confirm-photo']);
    }
}
