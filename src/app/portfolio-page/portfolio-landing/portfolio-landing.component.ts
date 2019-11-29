import {
  Component,
  OnInit,
  OnDestroy,
  Inject
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Subscription } from "rxjs";

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { JsonConversionService } from "../../services/json-conversion-service/json-conversion.service";
import { ParagraphConversionService } from "../../services/paragraph-conversion-service/paragraph-conversion.service";
@Component({
  selector: "app-portfolio-landing",
  templateUrl: "./portfolio-landing.component.html",
  styleUrls: ["./portfolio-landing.component.scss"]
})
export class PortfolioLandingComponent implements OnInit {
  portfolioData;
  projectCount;
  projectLibraryData;
  begDisplayIndex;
  endDisplayIndex;
  indexDisplayRange = 4;
  displayData;
  selectedProjectData;

  portfolioIndexSubscription: Subscription;
  projectInfoSubscription: Subscription;

  constructor(
    private http: HttpClient,
    private jsonConversion: JsonConversionService,
    private paragraphConversion: ParagraphConversionService,
    public dialog: MatDialog
  ) {
    this.setupPortfolioIndex();
  }

  private setupPortfolioIndex() {
    this.portfolioIndexSubscription = this.getPortfolioIndex().subscribe(
      data => {
        this.portfolioData = data;
        console.log(this.portfolioData);
        this.projectLibraryData = this.paragraphConversion.convertParagraphArray(
          data.project_library
        );
        console.log(this.projectLibraryData);
        this.projectCount = this.projectLibraryData.length;
        this.setupDisplayIndex();
        this.setupProjectDisplayCards(
          this.begDisplayIndex,
          this.endDisplayIndex
        );
      }
    );
  }

  public getPortfolioIndex(): Observable<any> {
    return this.http.get("../../../assets/portfolio-assets/index.json");
  }

  private setupDisplayIndex() {
    this.endDisplayIndex = this.projectLibraryData.length;
    if (this.projectLibraryData.length < this.indexDisplayRange) {
      this.begDisplayIndex = 0;
    } else {
      this.begDisplayIndex =
        this.projectLibraryData.length - this.indexDisplayRange;
    }
  }

  private setupProjectDisplayCards(begIndex, endIndex) {
    this.displayData = this.projectLibraryData.slice(begIndex, endIndex);
    this.displayData = this.displayData.reverse();
    console.log(this.displayData);
  }

  private setupProjectInfo(indexValue) {
    this.projectInfoSubscription = this.getProjectInfo(indexValue).subscribe(
      data => {
        // Very specific case where *ngFor does not like non arrays as iterables
        this.selectedProjectData = [data];
        console.log(data);

        this.displayProjectInfo();
      }
    );
  }

  private getProjectInfo(indexValue): Observable<any> {
    return this.http.get(
      "../../../assets/portfolio-assets/projects/project_" +
        indexValue +
        ".json"
    );
  }

  private displayProjectInfo() {
    const portfolioDialogRef = this.dialog.open(PortfolioDialog, {
      // case where it is better to change it back to an object for display purposes
      panelClass: "custom-dialog-content",
      data: this.selectedProjectData[0]
    });

    portfolioDialogRef.afterClosed().subscribe(result => {
      console.log("dialog closed");
    });
  }

  ngOnInit() {}

  // currently unnecessary but might need in the future
  getRandomColor() {
      var color = Math.floor(0x1000000 * Math.random()).toString(16);
      return "#" + ("000000" + color).slice(-6);
  }

  ngOnDestroy() {
    if (
      this.portfolioIndexSubscription &&
      !this.portfolioIndexSubscription.closed
    ) {
      this.portfolioIndexSubscription.unsubscribe();
    }

    if (this.projectInfoSubscription && !this.projectInfoSubscription.closed) {
      this.projectInfoSubscription.unsubscribe();
    }
  }

  public openSelectedProject(indexValue) {
    console.log(indexValue);
    this.setupProjectInfo(indexValue);
  }

  public nextCardSet() {
    if (this.projectLibraryData.length > this.indexDisplayRange) {
      if (
        this.endDisplayIndex + this.indexDisplayRange >
        this.projectLibraryData.length
      ) {
        this.begDisplayIndex =
          this.projectLibraryData.length - this.indexDisplayRange;
        this.endDisplayIndex = this.projectLibraryData.length;
      } else {
        if (
          this.begDisplayIndex === 0 &&
          this.projectLibraryData.length % this.indexDisplayRange !== 0
        ) {
          this.begDisplayIndex =
            this.begDisplayIndex +
            (this.projectLibraryData.length % this.indexDisplayRange);
        } else {
          this.begDisplayIndex = this.begDisplayIndex + this.indexDisplayRange;
        }
        this.endDisplayIndex = this.endDisplayIndex + this.indexDisplayRange;
      }
      this.setupProjectDisplayCards(this.begDisplayIndex, this.endDisplayIndex);

      console.log(this.begDisplayIndex);
      console.log(this.endDisplayIndex);
    }
  }

  public prevCardSet() {
    if (this.projectLibraryData.length > this.indexDisplayRange) {
      if (this.begDisplayIndex - this.indexDisplayRange < 0) {
        this.begDisplayIndex = 0;
        if (this.projectLibraryData.length % this.indexDisplayRange === 0) {
          this.endDisplayIndex = this.indexDisplayRange;
        } else {
          this.endDisplayIndex =
            this.projectLibraryData.length % this.indexDisplayRange;
        }
      } else {
        this.begDisplayIndex = this.begDisplayIndex - this.indexDisplayRange;
        this.endDisplayIndex = this.endDisplayIndex - this.indexDisplayRange;
      }
      this.setupProjectDisplayCards(this.begDisplayIndex, this.endDisplayIndex);

      console.log(this.begDisplayIndex);
      console.log(this.endDisplayIndex);
    }
  }

  public scrollTop() {
    window.scrollTo(0, 0);
  }
}

@Component({
  selector: "portfolio-dialog",
  templateUrl: "portfolio-dialog.html",
  styleUrls: ["portfolio-landing.component.scss"]
})
export class PortfolioDialog {
  mainInfoData;

  constructor(
    private paragraphConversion: ParagraphConversionService,
    public portfolioDialogRef: MatDialogRef<PortfolioDialog>,
    @Inject(MAT_DIALOG_DATA) public data: PortfolioData
  ) {
    console.log(data);
    this.setupPortfolioData(data);
  }

  setupPortfolioData(data) {
    this.mainInfoData = this.paragraphConversion.convertJsonArray(
      data.main_info
    );
  }

  onCloseClick(): void {
    this.portfolioDialogRef.close();
  }
}

export interface PortfolioData {
  'background_color':string;
  'text_color':string;
}
