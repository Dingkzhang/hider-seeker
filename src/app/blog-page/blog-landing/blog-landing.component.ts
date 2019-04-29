import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

import { JsonConversionService } from '../../services/json-conversion-service/json-conversion.service';
import { ParagraphConversionService } from '../../services/paragraph-conversion-service/paragraph-conversion.service';
@Component({
  selector: 'app-blog-landing',
  templateUrl: './blog-landing.component.html',
  styleUrls: ['./blog-landing.component.scss']
})
export class BlogLandingComponent implements OnInit {

  navigationHeight;

  blogIndexInfo;
  currentBlogIndex;
  currentStoryInfo = null;
  currentMainContent = null;

  blogIndexSubscription: Subscription
  blogInfoSubscription: Subscription
  ngOnInit() { }

  ngOnDestroy() {
    this.blogIndexSubscription.unsubscribe();
    this.blogInfoSubscription.unsubscribe();
  }

  constructor(
    private http: HttpClient,
    private jsonConversion: JsonConversionService,
    private paragraphConversion: ParagraphConversionService
  ) {
    this.setupBlogIndex();
  }

  private setupBlogIndex() {
    this.blogIndexSubscription = this.getBlogIndex().subscribe(data => {
      this.blogIndexInfo = data;
      this.currentBlogIndex = this.blogIndexInfo.total_index;
      console.log(this.blogIndexInfo);
      this.setupBlogPageInfo(this.blogIndexInfo.total_index);
    });
  }

  private getBlogIndex(): Observable<any> {
    return this.http.get("../../../assets/blog-assets/index.json");
  }

  private setupBlogPageInfo(indexValue) {
    console.log(indexValue);
    this.currentBlogIndex = indexValue;
    this.blogInfoSubscription = this.getBlogPageInfo(indexValue).subscribe(data => {
      this.currentStoryInfo = data;
      this.currentMainContent = this.paragraphConversion.convertParagraphArray(data.main_info);
      console.log(this.currentStoryInfo);
    });
  }

  private getBlogPageInfo(indexValue): Observable<any> {
    let urlString = "../../../assets/blog-assets/stories/story_" + indexValue + ".json";
    return this.http.get(urlString);
  }

  private nextStory() {
    console.log(this.currentBlogIndex);
    console.log(this.blogIndexInfo.total_index);

    if (this.currentBlogIndex < this.blogIndexInfo.total_index) {
      this.setupBlogPageInfo(this.currentBlogIndex + 1);
    } else {
      this.setupBlogPageInfo(1);
    }
  }

  private prevStory() {
    console.log(this.currentBlogIndex);
    if (this.currentBlogIndex > 1) {
      this.setupBlogPageInfo(this.currentBlogIndex - 1);
    } else {
      this.setupBlogPageInfo(this.blogIndexInfo.total_index);
    }
  }

  private defaultStory() {
    this.setupBlogPageInfo(this.blogIndexInfo.total_index);
  }
}
