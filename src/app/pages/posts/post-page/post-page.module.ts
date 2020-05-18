import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomComponentsModule } from '../../../components/custom-component.module';

import { IonicModule } from '@ionic/angular';

import { PostPagePage } from './post-page.page';
import { PostPagePageRoutingModule } from './post-page-routing.module';

@NgModule({
  imports: [
    CustomComponentsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PostPagePageRoutingModule
      ],
  declarations: [PostPagePage]
})
export class PostPagePageModule {}
