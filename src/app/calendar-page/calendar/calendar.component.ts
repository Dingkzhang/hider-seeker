import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  Renderer2,
  AfterViewInit,
  OnDestroy,
  Inject
} from "@angular/core";

import { ParagraphConversionService } from "../../services/paragraph-conversion-service/paragraph-conversion.service";

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Subscription } from "rxjs";

import { Moment } from "moment";
import * as moment from "moment";
import { MatCalendar } from "@angular/material";
import { strict } from "assert";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"]
})
export class CalendarComponent implements OnInit {
  changeText = null;

  @Output()
  selectedDate = moment();
  currentMilliMonth;

  currentDay = null;

  currentYear = null;
  currentMonth = null;
  currentCalendarIndex = null;
  calendarIndexJson = null;
  calendarInfoJson = null;
  doesMonthExist = false;

  selectedDay = null;
  selectedMonth = null;
  selectedYear = null;

  calendarIndexSubscription: Subscription;
  calendarInfoSubscription: Subscription;

  // average of 30.5 days
  oneMonthInMilli = 2629746000;
  monthArray = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12
  };

  excuseArray = [
    [
      {
        type: "text",
        paragraph:
          "Hello, no time sorry! I'm not really that busy I'm just lazy."
      }
    ],
    [
      {
        type: "text",
        paragraph:
          "Cool, I'm glad you clicked on me but I don't have anything to say."
      }
    ],
    [
      {
        type: "text",
        paragraph: "Let me just keep wasting your time. Please keep reading me."
      }
    ],
    [{ type: "text", paragraph: "Yikes, no content here. Too bad so sad." }]
  ];

  constructor(
    private http: HttpClient,
    private renderer: Renderer2,
    public dialog: MatDialog
  ) {
    this.setupCalendarIndex();
  }

  @ViewChild("calendar", { static: true })
  calendar: MatCalendar<Moment>;

  ngOnInit() {}

  setupCalendarIndex() {
    this.calendarIndexSubscription = this.getCalendarIndex().subscribe(
      indexData => {
        this.calendarIndexJson = indexData;
        this.currentMonth = this.calendarIndexJson.current_month;
        this.currentYear = this.calendarIndexJson.current_year;

        let dateStr =
          this.currentYear + "-" + this.currentMonth.toString() + "-" + "15";
        console.log(dateStr);
        this.currentMilliMonth = this.convertDateToMilli(dateStr);
        if (
          this.checkMonthExist(
            this.currentMonth,
            this.currentYear,
            this.calendarIndexJson
          )
        ) {
          this.doesMonthExist = true;
          this.setupCalendarInfo(this.currentMonth, this.currentYear);
        } else {
          this.doesMonthExist = false;
        }
      }
    );
  }

  setupCalendarInfo(currentMonth, currentYear) {
    this.getCalendarInfo(currentMonth, currentYear).subscribe(infoData => {
      this.calendarInfoJson = infoData;
      console.log(this.calendarInfoJson);
    });
  }

  getCalendarIndex(): Observable<any> {
    return this.http.get("../../../assets/calendar-assets/index.json");
  }

  getCalendarInfo(currentMonth, currentYear): Observable<any> {
    return this.http.get(
      "../../assets/calendar-assets/" +
        currentYear +
        "-dates/" +
        currentYear +
        "-" +
        currentMonth +
        ".json"
    );
  }

  ngAfterViewInit() {
    const nextButton = document.querySelectorAll(".mat-calendar-next-button");

    const prevButton = document.querySelectorAll(
      ".mat-calendar-previous-button"
    );
    if (nextButton) {
      Array.from(nextButton).forEach(button => {
        this.renderer.listen(button, "click", () => {
          console.log("clickity forward");

          console.log(this.currentMonth);
          console.log(this.currentMilliMonth);
          this.currentMilliMonth =
            this.currentMilliMonth + this.oneMonthInMilli;

          this.monthSelected(this.currentMilliMonth);
        });
      });
    }

    if (prevButton) {
      Array.from(prevButton).forEach(button => {
        this.renderer.listen(button, "click", () => {
          console.log("clickity back");

          console.log(this.currentMonth);
          console.log(this.currentMilliMonth);
          this.currentMilliMonth =
            this.currentMilliMonth - this.oneMonthInMilli;
          this.monthSelected(this.currentMilliMonth);
        });
      });
    }
  }

  ngOnDestroy() {
    if (
      this.calendarIndexSubscription &&
      !this.calendarIndexSubscription.closed
    ) {
      this.calendarIndexSubscription.unsubscribe();
    }
    if (
      this.calendarInfoSubscription &&
      !this.calendarInfoSubscription.closed
    ) {
      this.calendarInfoSubscription.unsubscribe();
    }
  }

  monthSelected(date) {
    // console.log(date);
    let currentDate = new Date(date).toString();

    // console.log(currentDate);
    let currentMonth = currentDate.split(" ")[1];
    let currentYear = +currentDate.split(" ")[3];
    let intCurrentMonth = this.convertMonthToNum(currentMonth);

    let dateString = currentYear + "-" + intCurrentMonth + "-" + "15";

    this.currentMilliMonth = this.convertDateToMilli(dateString);
    console.log(this.currentMilliMonth);
    this.currentMonth = intCurrentMonth;
    this.currentYear = currentYear;

    console.log(this.currentMilliMonth, this.currentMonth, this.currentYear);
    if (
      this.checkMonthExist(intCurrentMonth, currentYear, this.calendarIndexJson)
    ) {
      console.log("it is true");
      this.setupCalendarInfo(intCurrentMonth, currentYear);

      this.doesMonthExist = true;
    } else {
      this.doesMonthExist = false;
    }
  }

  checkMonthExist(currentMonth, currentYear, currentInfo) {
    // console.log(this.calendarIndexJson.calendarLibary[currentYear][0][currentMonth].doesExist);

    console.log("inside check month exist");
    console.log(currentMonth, currentYear, currentInfo);
    // need to already be converting curent month to num instead of trying to convert it here
    if (
      currentInfo.calendar_library[currentYear] !== undefined &&
      currentInfo.calendar_library[currentYear] !== undefined &&
      currentInfo.calendar_library[currentYear][0][currentMonth] !==
        undefined &&
      currentInfo.calendar_library[currentYear][0][currentMonth].doesExist !==
        undefined &&
      currentInfo.calendar_library[currentYear][0][currentMonth].doesExist
    ) {
      return true;
    }
    return false;
  }

  convertDateToMilli(month) {
    let milliDate = new Date(month);
    return milliDate.getTime();
  }

  convertMilliToDate(monthInt) {
    let milliDate = new Date(monthInt);
    return milliDate;
  }

  convertMonthToNum(month) {
    return this.monthArray[month];
  }

  dateChanged(date) {
    console.log("date: " + date);
    console.log(this.calendarInfoJson);
    // conditional to check if month and date info exists
    let selectedDate = this.convertMilliToDate(date);

    let infoData = null;
    if (this.doesMonthExist && this.checkDateExist(selectedDate)) {
      infoData = this.getDateData();
    } else {
      infoData = this.getRandomData();
    }
    this.displayCalendarInfo(infoData);
  }

  checkDateExist(date) {
    console.log(date);
    console.log(typeof JSON.stringify(date));
    console.log(JSON.stringify(date));
    let dateString = JSON.stringify(date).split("T")[0];

    this.selectedMonth = JSON.stringify(dateString).split("-")[1];

    this.selectedDay = JSON.stringify(dateString)
      .split("-")[2]
      .substring(0, JSON.stringify(dateString).split("-")[2].length - 1);
    this.selectedYear = JSON.stringify(dateString)
      .split("-")[0]
      .substring(3, JSON.stringify(dateString).split("-")[0].length);

    if (
      this.calendarInfoJson !== null &&
      this.calendarInfoJson !== undefined &&
      this.calendarInfoJson.year_int === this.selectedYear &&
      this.calendarInfoJson.month_int === this.selectedMonth &&
      this.calendarInfoJson.calendar_info.hasOwnProperty(this.selectedDay) &&
      this.calendarInfoJson.calendar_info[this.selectedDay].doesDataExist
    ) {
      console.log("correcto");
      return true;
    }
    console.log("falsio");
    return false;
  }

  getDateData() {
    return this.calendarInfoJson.calendar_info[this.selectedDay].main_info;
  }
  getRandomData() {
    return this.createRandomExcuse();
  }

  displayCalendarInfo(infoData) {
    console.log(infoData);
    const calendarDialogRef = this.dialog.open(CalendarDialog, {
      panelClass: "custom-calendar-dialog-content",
      data: infoData
    })

    calendarDialogRef.afterClosed().subscribe(result => {
      console.log("dialog closed");
    })
  }

  createRandomExcuse() {
    this.excuseArray.length;
    let randomInt = this.getRandomInt(this.excuseArray.length);
    console.log(this.excuseArray[randomInt]);
    return this.excuseArray[randomInt];
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}

@Component({
  selector: "calendar-dialog",
  templateUrl: "calendar-dialog.html",
  styleUrls: ["calendar.component.scss"]
})
export class CalendarDialog {

  mainInfoData;

  constructor(
    private paragraphConversion: ParagraphConversionService,
    public calendarDialogRef: MatDialogRef<CalendarDialog>,
    @Inject(MAT_DIALOG_DATA) public data: CalendarData
  ){
    console.log(data);
  }

  setupCalendarData(data) {

  }

  onCloseClick(): void {
    this.calendarDialogRef.close();
  }

}

export interface CalendarData {}