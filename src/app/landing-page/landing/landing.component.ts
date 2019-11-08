import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

import { JsonConversionService } from '../../services/json-conversion-service/json-conversion.service';
import { ParagraphConversionService } from '../../services/paragraph-conversion-service/paragraph-conversion.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  blogIndexSubscription: Subscription;
  portfolioIndexSubscription: Subscription;

  blogIndex;
  blogInfo;
  latestBlogInfo;

  portfolioIndex;
  portfolioInfo;
  latestPortfolioInfo;

  isImageThumbnail = false;

  constructor(
    private http: HttpClient,
    private jsonConversion: JsonConversionService,
    private paragraphConversion: ParagraphConversionService) {
    this.setupBlogIndex();
    this.setupPorfolioIndex();

    console.log(this.latestBlogInfo);
  }

  private setupBlogIndex() {
    this.blogIndexSubscription = this.getBlogIndex().subscribe(data => {
      this.blogIndex = data;
      this.blogInfo = this.paragraphConversion.convertParagraphArray(this.blogIndex.story_library)
      const blogLength = this.blogInfo.length;
      this.latestBlogInfo = this.blogInfo[blogLength - 1];
      console.log(this.latestBlogInfo);

      if (this.latestBlogInfo.image_thumbnail != "") {
        this.isImageThumbnail = true
      }
    });
  }

  private getBlogIndex(): Observable<any> {
    return this.http.get('../../../assets/blog-assets/index.json');
  }

  private setupPorfolioIndex() {
    this.portfolioIndexSubscription = this.getPorfolioIndex().subscribe(data => {
      this.portfolioIndex = data;
      this.portfolioInfo = this.paragraphConversion.convertParagraphArray(this.portfolioIndex.project_library);
      const portfolioLength = this.portfolioInfo.length;
      this.latestPortfolioInfo = this.portfolioInfo[portfolioLength - 1];
  
      console.log(this.latestPortfolioInfo);

    })
  }

  private getPorfolioIndex() {
    return this.http.get('../../../assets/portfolio-assets/index.json');
  }


  ngOnInit() { }

  ngOnDestroy() {
    if (this.blogIndexSubscription && !this.blogIndexSubscription.closed) {
      this.blogIndexSubscription.unsubscribe();
    }

    if (this.portfolioIndexSubscription && !this.portfolioIndexSubscription.closed) {
      this.portfolioIndexSubscription.unsubscribe();
    }
  }


}
