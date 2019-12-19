import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService,
    private toastController: ToastController) { }

  ngOnInit() {
  }

  confirmLogout() {
    this.auth.logout();
    const toast = this.toastController.create({
      message: 'User has been logged out',
      duration: 3000
    });
    toast.then(t => t.present());
  }

  cancel() {
    console.log('logout cancelled');
    this.router.navigate(['/home/profile']);
  }

}
