import { TestBed } from '@angular/core/testing';

import { CascadelistService } from './cascadelist.service';

describe('CascadelistService', () => {
  let service: CascadelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CascadelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
