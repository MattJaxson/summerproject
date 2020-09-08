import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsPage } from './posts.page';
import { PostRoutingModule } from './post-routing.module';
import { CustomComponentsModule } from '../../components/custom-component.module';
import { ThirdPersonProfilePageModule } from 'src/app/modals/third-person-profile/third-person-profile.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomComponentsModule,
    ReactiveFormsModule,
    PostRoutingModule,
    ThirdPersonProfilePageModule,
  ],
  declarations: [
    PostsPage]
})
export class PostPageModule {}
