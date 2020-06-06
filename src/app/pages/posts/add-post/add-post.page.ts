import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PostsService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {
  creatorEmail;
  creatorName;
  postValue;

  textPostForm: FormGroup;

  // Do some sort of Validation Later
  validationMessages = {};
  creatorProfilePicture: any;

  constructor(
    private router: Router,
    private loading: LoadingController,
    private posts: PostsService,
    private profile: ProfileService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.textPostForm = this.formBuilder.group({
      textPost: ['', Validators.required]
    }
    );

    this.profile.getUserDetails().subscribe(
      details => {
        console.log(details);
        this.creatorEmail = details['email'];
        this.creatorName = details['fullName'];
        this.creatorProfilePicture = details['profilePicture'];
      }
    );
  }

  back() {
    this.router.navigate(['/home/posts']);
  }

  async post(creatorName, creatorEmail, creatorProfilePicture, post) {
    await this.presentLoading();
    await this.posts.addPost(creatorName, creatorEmail, creatorProfilePicture, post).subscribe(
      data => {
        console.log(data);
      }
    );
    await this.router.navigate(['home/posts/add-post/verification']);
  }

  async presentLoading() {
    const loading = await this.loading.create({
      message: 'Sending post to be Verified...',
      spinner: 'bubbles',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
