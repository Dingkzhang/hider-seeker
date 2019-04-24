import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParagraphConversionService {

  constructor() { }

  public convertParagraphArray(objectArray) {
    console.log(objectArray);
    console.log(typeof (objectArray));

    for (let i in objectArray) {
      console.log(i);
    }

  }

}
