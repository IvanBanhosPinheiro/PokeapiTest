import { TestBed } from '@angular/core/testing';

import { ApokeapiService } from './apokeapi.service';

describe('ApokeapiService', () => {
  let service: ApokeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApokeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
