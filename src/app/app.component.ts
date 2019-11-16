import { Component } from '@angular/core';
import { PwaService } from './services/pwa-service/pwa.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hider-seeker';
  private isMobileView: boolean;

  constructor(public Pwa: PwaService) {
    if (window.innerWidth < 768) {
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    }
  }

  installPwa(): void {
    this.Pwa.promptEvent.event;
  }

  public getIsMobileView(): boolean {
    return this.isMobileView;
  }

}
