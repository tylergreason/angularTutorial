import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

import { products } from '../products'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product; 
  sliderValue: number;


  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[params.get('productId')]
    })
    this.sliderValue = 10;
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  setSliderValue(e) {
    this.sliderValue = e.value;
  }

  buttonText(product) {
    if (this.cartService.getItems().includes(this.product)){
      return "Bought!"
    }else{
      return "Buy"
    }
  }


}