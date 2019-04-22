import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './landing-page/landing-page.module#LandingPageModule' },
  { path: 'landing', loadChildren: './landing-page/landing-page.module#LandingPageModule' },
  { path: 'aboutMe', loadChildren: './about-me-page/about-me-page.module#AboutMePageModule' },
  { path: 'portfolioLanding', loadChildren: './portfolio-page/portfolio-page.module#PortfolioPageModule' },
  { path: 'blogLanding', loadChildren: './blog-page/blog-page.module#BlogPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
