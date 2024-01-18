import { TestBed } from '@angular/core/testing';

import { ApiesService } from './apies.service';

describe('ApiesService', () => {
  let service: ApiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
