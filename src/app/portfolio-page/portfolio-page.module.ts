import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioPageRoutingModule } from './portfolio-page-routing.module';
import { PortfolioLandingComponent } from './portfolio-landing/portfolio-landing.component';

import { AngularMaterialsModule } from '../shared/angular-materials/angular-materials.module';

@NgModule({
  declarations: [PortfolioLandingComponent],
  imports: [
    CommonModule,
    PortfolioPageRoutingModule,
    AngularMaterialsModule
  ]
})
export class PortfolioPageModule { }
