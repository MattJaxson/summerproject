import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService,
    private toast: ToastController,
    private loading: LoadingController,
    private alert: AlertController) { }

  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loading.create({
      message: 'Logging in...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async confirmLogout() {
    const toast = this.toast.create({
      message: 'User has been logged out',
      duration: 3000
    });
    
    const loading = await this.loading.create({
      message: 'Logging out...',
      duration: 1000
    })

    const alert = await this.alert.create({
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelling logout');
            this.router.navigate(['/home/profile']);
          }
        },
        {
          text: 'Logout',
          handler: () => {
            console.log('Logging out');
            this.auth.logout();
            loading.present();
            toast.then(t => t.present());
          }}
      ]
    });

    await alert.present();
  }

  cancel() {
    console.log('logout cancelled');
    this.router.navigate(['/home/profile']);
  }

}
