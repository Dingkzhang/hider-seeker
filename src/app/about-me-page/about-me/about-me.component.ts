import { Component, OnInit } from "@angular/core";
import * as aboutMeAsset from "../../../assets/about-me-assets/about-me.json";

import { Router } from "@angular/router";
import { RestApiService } from "../../shared/rest-api.service";
@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"]
})
export class AboutMeComponent implements OnInit {
  showFiller = false;
  aboutMeQuestions = aboutMeAsset.default.Questions;
  aboutMeAnswers = aboutMeAsset.default.Answers;
  aboutMeGoals = aboutMeAsset.default.Goals;
  aboutMeGoalAnswers = aboutMeAsset.default.Goal_Answer;
  constructor(public restApi: RestApiService, public router: Router) {
    this.restApi.getMovies().subscribe(data => {
      console.log(data);
      console.log(this.aboutMeGoalAnswers.Goal_1_Answer);
    });
  }

  ngOnInit() {}
}
