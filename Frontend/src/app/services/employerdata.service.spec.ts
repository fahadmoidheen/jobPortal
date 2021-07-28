import { TestBed } from '@angular/core/testing';

import { EmployerdataService } from './employerdata.service';

describe('EmployerdataService', () => {
  let service: EmployerdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployerdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
