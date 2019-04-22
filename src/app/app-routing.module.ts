import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './landing-page/landing-page.module#LandingPageModule' },
  { path: 'landing', loadChildren: './landing-page/landing-page.module#LandingPageModule' },
  { path: 'aboutme', loadChildren: './about-me-page/about-me-page.module#AboutMePageModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
