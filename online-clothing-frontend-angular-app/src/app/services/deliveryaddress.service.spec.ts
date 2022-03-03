import { TestBed } from '@angular/core/testing';

import { DeliveryaddressService } from './deliveryaddress.service';

describe('DeliveryaddressService', () => {
  let service: DeliveryaddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryaddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
