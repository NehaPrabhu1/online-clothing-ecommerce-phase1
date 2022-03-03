import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryaddressComponent } from './deliveryaddress.component';

describe('DeliveryaddressComponent', () => {
  let component: DeliveryaddressComponent;
  let fixture: ComponentFixture<DeliveryaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryaddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
