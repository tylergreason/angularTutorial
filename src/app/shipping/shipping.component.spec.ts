import { HttpClient } from '@angular/common/http';
import { CartService } from './../cart.service';
import { ShippingComponent } from './shipping.component';


describe('Product Details Component', () => {
  // create an instance of the component before everything else loads
  let component: ShippingComponent;
  
  beforeEach(() => {
    component = new ShippingComponent(new CartService(new HttpClient(null)));
  })

  it('1 + 1 = 2', () => {
    expect(1 + 1).toEqual(2);
  })

  // it('comp name', () => {
  //   expect(component.title).toEqual('app');
  // })
})

// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { ShippingComponent } from './shipping.component';

// describe('ShippingComponent', () => {
//   let component: ShippingComponent;
//   let fixture: ComponentFixture<ShippingComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ShippingComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ShippingComponent);
//     component = new ShippingComponent(null);
//     // component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should have a component', () => {
//     console.log(component);

//     expect(component).toBeTruthy();
//     expect(component).toBeFalsy();
//   })

//   // it('should create', () => {
//   //   expect(component).toBeTruthy();
//   // });
// });
