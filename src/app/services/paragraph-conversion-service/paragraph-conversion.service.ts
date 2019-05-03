import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParagraphConversionService {

  constructor() { }

  public convertParagraphArray(objectArray) {

    let paragraphArray = [];
    // The way I have the arrays setup I have to do 2 for loops in order to filter out the paragraphs.
    // Need to relook into this when I have time.
    for (let paragraph in objectArray) {
      for (let p in objectArray[paragraph]) {
        paragraphArray.push(objectArray[paragraph][p]);
      }
    }

    console.log(paragraphArray);

    return paragraphArray;
  }

  public convertJsonArray(objectArray) {

    let paragraphArray = [];
    // The way I have the arrays setup I have to do 2 for loops in order to filter out the paragraphs.
    // Need to relook into this when I have time.
    for (let paragraph in objectArray) {
      paragraphArray.push(objectArray[paragraph]);
    }

    console.log(paragraphArray);

    return paragraphArray;
  }

}
