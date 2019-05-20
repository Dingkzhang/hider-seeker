import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingComponent } from './landing/landing.component';
import { AngularMaterialsModule } from '../shared/angular-materials/angular-materials.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    AngularMaterialsModule
  ]
})
export class LandingPageModule { }
