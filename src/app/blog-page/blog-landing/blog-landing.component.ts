import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-blog-landing',
  templateUrl: './blog-landing.component.html',
  styleUrls: ['./blog-landing.component.scss']
})
export class BlogLandingComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    })

  }

  public getJSON(): Observable<any> {
    return this.http.get("../../../assets/blog-assets/index.json");
  }



  ngOnInit() {
  }

}
