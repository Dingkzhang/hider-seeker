import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMePageRoutingModule } from './about-me-page-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { AngularMaterialsModule } from '../shared/angular-materials/angular-materials.module';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    AboutMePageRoutingModule,
    AngularMaterialsModule
  ]
})
export class AboutMePageModule { }
