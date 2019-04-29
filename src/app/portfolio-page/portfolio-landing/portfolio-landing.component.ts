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

  portfolioIndexInfo;
  currentPortfolioIndex;
  currentPortfolioInfo = null;
  currentMainContent = null;
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
      this.portfolioIndexInfo = data;
      console.log(this.portfolioIndexInfo);
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
