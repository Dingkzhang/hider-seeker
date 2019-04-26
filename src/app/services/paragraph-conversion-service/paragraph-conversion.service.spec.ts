import { TestBed } from '@angular/core/testing';

import { ParagraphConversionService } from './paragraph-conversion.service';

describe('ParagraphConversionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParagraphConversionService = TestBed.get(ParagraphConversionService);
    expect(service).toBeTruthy();
  });
});
