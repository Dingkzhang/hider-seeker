import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioLandingComponent } from './portfolio-landing/portfolio-landing.component';

const routes: Routes = [
  { path: '', component: PortfolioLandingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioPageRoutingModule { }
