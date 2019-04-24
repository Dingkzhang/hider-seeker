import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio-landing',
  templateUrl: './portfolio-landing.component.html',
  styleUrls: ['./portfolio-landing.component.scss']
})
export class PortfolioLandingComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    })

  }

  public getJSON(): Observable<any> {
    return this.http.get("../../../assets/portfolio-assets/index.json");
  }

  ngOnInit() {
  }

}
