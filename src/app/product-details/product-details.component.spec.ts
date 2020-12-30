import { HttpClient } from '@angular/common/http';
import { CartService } from './../cart.service';
import { ProductDetailsComponent } from './product-details.component';
import { ActivatedRoute } from '@angular/router';


describe('Product Details Component', () => {
  let component: ProductDetailsComponent;
  let activatedRoute: ActivatedRoute;
  let cartService: CartService;
  let httpClient: HttpClient;

  beforeEach(() => {
    activatedRoute = new ActivatedRoute();
    httpClient = new HttpClient(null);
    cartService = new CartService(httpClient);
    component = new ProductDetailsComponent(activatedRoute, cartService);
  })

  it('should exist', () => {
    expect(component).toBeTruthy();
  })

  it('1 + 1 = 2', () => {
    expect(1 + 1).toEqual(2);
  })
})

// /* tslint:disable:no-unused-variable */
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement, Component, OnInit } from '@angular/core';
// import { RouterTestingModule } from "@angular/router/testing";
// import { ProductDetailsComponent } from './product-details.component';
// describe('ProductDetailsComponent', () => {
//   let component: ProductDetailsComponent;
//   let fixture: ComponentFixture<ProductDetailsComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ProductDetailsComponent],
//       imports: [
//         RouterTestingModule
//       ]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ProductDetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('fjdslkj', () => {
//     expect(1 + 1).toEqual(2);
//   })
// });