import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsPage } from './posts.page';
import { PostRoutingModule } from './post-routing.module';
import { FollowIconComponent } from '../../components/follow-icon/follow-icon.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostRoutingModule,
    RouterModule.forChild([{ path: '', component: PostsPage }])
  ],
  declarations: [
    PostsPage,
    FollowIconComponent]
})
export class PostPageModule {}
