import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarPageRoutingModule } from './calendar-page-routing.module';
import { CalendarComponent, CalendarDialog } from './calendar/calendar.component';
import { AngularMaterialsModule } from '../shared/angular-materials/angular-materials.module';

@NgModule({
  declarations: [CalendarComponent, CalendarDialog],
  imports: [
    CommonModule,
    CalendarPageRoutingModule,
    AngularMaterialsModule
  ],
  entryComponents: [CalendarDialog]
})
export class CalendarPageModule { }
