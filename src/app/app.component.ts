import { Component, ViewChild, ElementRef, HostListener } from "@angular/core";
import { PwaService } from "./services/pwa-service/pwa.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "hider-seeker";
  private isMobileView: boolean;

  constructor(public Pwa: PwaService) {
    if (window.innerWidth < 768) {
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    }
  }

  @ViewChild("stickyMenu", {static: false}) menuElement: ElementRef;

  headerPosition: any;
  sticky: boolean = false;

  ngAfterViewInit() {
    this.headerPosition = this.menuElement.nativeElement.offsetTop;
  }

  installPwa(): void {
    this.Pwa.promptEvent.event;
  }

  public getIsMobileView(): boolean {
    return this.isMobileView;
  }

  @HostListener("window:scroll", ["$event"])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.headerPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
