import { TestBed } from '@angular/core/testing';

import { JsonConversionService } from './json-conversion.service';

describe('JsonConversionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonConversionService = TestBed.get(JsonConversionService);
    expect(service).toBeTruthy();
  });
});
