import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingComponent } from './shipping.component';

describe('ShippingComponent', () => {
  let component: ShippingComponent;
  let fixture: ComponentFixture<ShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingComponent);
    component = new ShippingComponent(null);
    // component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a component', () => {
    console.log(component);

    expect(component).toBeTruthy();
    expect(component).toBeFalsy();
  })

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
