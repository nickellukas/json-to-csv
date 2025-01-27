import { TestBed } from '@angular/core/testing';

import { JsonToCsvService } from './json-to-csv.service';

describe('JsonToCsvService', () => {
  let service: JsonToCsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonToCsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
