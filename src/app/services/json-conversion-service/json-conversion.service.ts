import { Injectable } from '@angular/core';
import { ParagraphConversionService } from '../paragraph-conversion-service/paragraph-conversion.service';
@Injectable({
  providedIn: 'root'
})
export class JsonConversionService {

  constructor(private paragraphConversion: ParagraphConversionService) { }

  public jsonObjectToArray(jsonObject) {
    const mapped = Object.keys(jsonObject).map(key => ({ type: key, value: jsonObject[key] }));
    return mapped;
  }
}
