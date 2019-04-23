import { Component, OnInit } from '@angular/core';
import * as aboutMeAsset from "../../../assets/about-me-assets/about-me.json"

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  showFiller = false;
  aboutMeQuestions = aboutMeAsset.default.Questions;
  aboutMeAnswers = aboutMeAsset.default.Answers;

  constructor() {
    console.log(this.aboutMeQuestions);
    console.log(this.aboutMeAnswers);

  }

  ngOnInit() {
  }

}
