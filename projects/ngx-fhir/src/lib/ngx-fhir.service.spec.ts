import { TestBed } from '@angular/core/testing';

import { NgxFhirService } from './ngx-fhir.service';

describe('NgxFhirService', () => {
  let service: NgxFhirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFhirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
