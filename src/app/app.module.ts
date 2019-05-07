import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';

// Shared animation and materials import
import { AngularAnimationsModule } from './shared/angular-animations/angular-animations.module';
import { AngularMaterialsModule } from './shared/angular-materials/angular-materials.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularAnimationsModule,
    AngularMaterialsModule,
    AppRoutingModule,

    // Http Connection
    HttpClientModule,

    // Progressive Web App
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
