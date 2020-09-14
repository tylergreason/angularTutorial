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


  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
    console.log(this.cartService.getItems());
    console.log(this.cartService.getItems().includes(product));
    
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')]
    })
    this.buttonText;
    if (this.cartService.getItems().includes(this.product)){
        return this.buttonText = "Bought!"
    }else{
        return this.buttonText = "Buy"
    }
  }

}