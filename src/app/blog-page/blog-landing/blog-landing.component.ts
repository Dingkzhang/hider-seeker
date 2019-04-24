import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JsonConversionService } from '../../services/json-conversion-service/json-conversion.service';
import { ParagraphConversionService } from '../../services/paragraph-conversion-service/paragraph-conversion.service';
@Component({
  selector: 'app-blog-landing',
  templateUrl: './blog-landing.component.html',
  styleUrls: ['./blog-landing.component.scss']
})
export class BlogLandingComponent implements OnInit {

  blogIndex;
  currentBlogIndex;
  currentStoryInfo = null;
  currentMainContent = null;
  ngOnInit() { }

  constructor(
    private http: HttpClient,
    private jsonConversion: JsonConversionService,
    private paragraphConversion: ParagraphConversionService
  ) {
    this.getBlogIndex().subscribe(data => {
      this.blogIndex = data;
      this.currentBlogIndex = this.blogIndex.total_index;
      console.log(this.blogIndex);
      this.getBlogPageInfo(this.blogIndex.total_index).subscribe(data => {
        this.currentStoryInfo = data;
        this.currentMainContent = this.paragraphConversion.convertParagraphArray(data.main_info);
        console.log(this.currentStoryInfo);
      });
    });
  }

  private getBlogIndex(): Observable<any> {
    return this.http.get("../../../assets/blog-assets/index.json");
  }

  private getBlogPageInfo(indexValue): Observable<any> {
    let urlString = "../../../assets/blog-assets/stories/story_" + indexValue + ".json";
    return this.http.get(urlString);
  }

  private nextStory() { }

  private prevStory() { }

  private defaultStory() { }
}
