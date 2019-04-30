import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

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

  portfolioIndexSubscription: Subscription;

  constructor(
    private http: HttpClient,
    private jsonConversion: JsonConversionService,
    private paragraphConversion: ParagraphConversionService
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

  ngOnInit() { }

  ngOnDestroy() {
    this.portfolioIndexSubscription.unsubscribe();
  }

}
