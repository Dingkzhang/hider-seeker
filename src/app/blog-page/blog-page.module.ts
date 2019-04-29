import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPageRoutingModule } from './blog-page-routing.module';
import { BlogLandingComponent } from './blog-landing/blog-landing.component';
import { AngularMaterialsModule } from '../shared/angular-materials/angular-materials.module';

@NgModule({
  declarations: [BlogLandingComponent],
  imports: [
    CommonModule,
    BlogPageRoutingModule,
    AngularMaterialsModule
  ]
})
export class BlogPageModule { }
