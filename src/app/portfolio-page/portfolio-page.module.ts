import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioPageRoutingModule } from './portfolio-page-routing.module';
import { PortfolioLandingComponent } from './portfolio-landing/portfolio-landing.component';

@NgModule({
  declarations: [PortfolioLandingComponent],
  imports: [
    CommonModule,
    PortfolioPageRoutingModule
  ]
})
export class PortfolioPageModule { }
