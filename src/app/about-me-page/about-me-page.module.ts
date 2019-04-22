import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMePageRoutingModule } from './about-me-page-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    AboutMePageRoutingModule
  ]
})
export class AboutMePageModule { }
