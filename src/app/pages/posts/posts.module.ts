import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsPage } from './posts.page';
import { PostRoutingModule } from './post-routing.module';
import { CustomComponentsModule } from '../../components/custom-component.module';
// import { ReadMoreComponent } from '../../components/read-more/read-more.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomComponentsModule,
    ReactiveFormsModule,
    PostRoutingModule,
    // ReadMoreComponent,
  ],
  declarations: [
    PostsPage]
})
export class PostPageModule {}
