import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioPageRoutingModule } from './portfolio-page-routing.module';
import { PortfolioLandingComponent, PortfolioDialog } from './portfolio-landing/portfolio-landing.component';

import { AngularMaterialsModule } from '../shared/angular-materials/angular-materials.module';

@NgModule({
  declarations: [PortfolioLandingComponent, PortfolioDialog],
  imports: [
    CommonModule,
    PortfolioPageRoutingModule,
    AngularMaterialsModule
  ],
  entryComponents: [PortfolioDialog]
})
export class PortfolioPageModule { }
