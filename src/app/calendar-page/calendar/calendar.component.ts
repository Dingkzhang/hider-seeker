import { Component, OnInit } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Subscription } from "rxjs";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"]
})
export class CalendarComponent implements OnInit {

  changeText = null;

  currentYear = null;
  currentMonth = null;
  currentMonthString = null;
  currentCalendarIndex = null;
  calendarIndexJson = null;
  calendarInfoJson = null;

  calendarIndexSubscription: Subscription;
  calendarInfoSubscription: Subscription;

  whoTest = "nothing";

  constructor(private http: HttpClient) {
    this.setupCalendarIndex();
  }

  ngOnInit() {}

  calltest(numInput) {
    if (numInput == 1) {
      this.whoTest = "number 1!";
    } else {
      this.whoTest = "number Other!";
    }
  }

  setupCalendarIndex() {
    this.calendarIndexSubscription = this.getCalendarIndex().subscribe(data => {
      this.calendarIndexJson = data;
      console.log(this.calendarIndexJson);
      this.currentMonth = this.calendarIndexJson.current_month;
      this.currentMonthString = this.calendarIndexJson.current_month_string;
      this.currentYear = this.calendarIndexJson.current_year;
    });
  }

  setupCalendarInfo() {}

  getCalendarIndex(): Observable<any> {
    return this.http.get("../../../assets/calendar-assets/index.json");
  }

  getCalendarInfo(): Observable<any> {
    return null;
  }
}
