import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParagraphConversionService {

  constructor() { }

  public convertParagraphArray(objectArray) {

    const paragraphArray = [];
    // The way I have the arrays setup I have to do 2 for loops in order to filter out the paragraphs.
    // Need to relook into this when I have time.
    for (const paragraph in objectArray) {
      for (const p in objectArray[paragraph]) {
        paragraphArray.push(objectArray[paragraph][p]);
      }
    }

    console.log(paragraphArray);

    return paragraphArray;
  }

  public convertJsonArray(objectArray) {

    let paragraphArray = [];
    // I believe this is a better way to convert the json file into an array. Had to restructure the json file in order to do this
    for (const paragraph in objectArray) {
      paragraphArray.push(objectArray[paragraph]);
    }

    console.log(paragraphArray);

    return paragraphArray;
  }

}
