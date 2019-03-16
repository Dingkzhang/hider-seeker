import { Component } from '@angular/core';
import { PwaService } from './services/pwa-service/pwa.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hider-seeker';

  constructor(public Pwa: PwaService) {

  }

  installPaw(): void {
    this.Pwa.promptEvent.event;
  }

}
