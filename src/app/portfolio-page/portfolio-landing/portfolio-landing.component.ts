import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { JsonConversionService } from '../../services/json-conversion-service/json-conversion.service';
import { ParagraphConversionService } from '../../services/paragraph-conversion-service/paragraph-conversion.service';
@Component({
  selector: 'app-portfolio-landing',
  templateUrl: './portfolio-landing.component.html',
  styleUrls: ['./portfolio-landing.component.scss']
})
export class PortfolioLandingComponent implements OnInit {

  portfolioData;
  projectLibraryData;
  projectLibraryDataDisplayPage;

  
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
    this.portfolioIndexSubscription = this.getPortfolioIndex().subscribe(data => {
      this.portfolioData = data;
      console.log(this.portfolioData);
      this.projectLibraryData = this.paragraphConversion.convertParagraphArray(data.project_library);

      console.log(this.projectLibraryData);

    });
  }

  public getPortfolioIndex(): Observable<any> {
    return this.http.get("../../../assets/portfolio-assets/index.json");
  }

  private setupProjectInfo(indexValue) {
    this.projectInfoSubscription = this.getProjectInfo(indexValue).subscribe(data => {
      // Very specific case where *ngFor does not like non arrays as iterables
      this.selectedProjectData = [data];
      console.log(data);

      this.displayProjectInfo();
    });
  }

  private getProjectInfo(indexValue): Observable<any> {
    return this.http.get("../../../assets/portfolio-assets/projects/project_" + indexValue + ".json");
  }

  private displayProjectInfo() {
    const portfolioDialogRef = this.dialog.open(PortfolioDialog, {
      // case where it is better to change it back to an object for display purposes
      panelClass: 'custom-dialog-content',
      data: this.selectedProjectData[0]
    });

    portfolioDialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed');
    })
  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.portfolioIndexSubscription && !this.portfolioIndexSubscription.closed) {
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

}


@Component({
  selector: 'portfolio-dialog',
  templateUrl: 'portfolio-dialog.html',
  styleUrls: ['./portfolio-landing.component.scss']
})

export class PortfolioDialog {
  
  mainInfoData;
  
  constructor(
    private paragraphConversion: ParagraphConversionService,
    public portfolioDialogRef: MatDialogRef<PortfolioDialog>,
    @Inject(MAT_DIALOG_DATA) public data: PorfolioData) {
    console.log(data);
    this.setupPortfolioData(data);
  }

  setupPortfolioData(data) {
    this.mainInfoData = this.paragraphConversion.convertJsonArray(data.main_info);
  }

  onCloseClick(): void {
    this.portfolioDialogRef.close();
  }
}

export interface PorfolioData {

}