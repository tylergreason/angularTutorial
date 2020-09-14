import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CartService {

  items = []; 

  addToCart(product){
    this.items.push(product); 
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = []; 
    return this.items; 
  }

  getQuantity(product){
      return this.items.filter(item => item === product).length
  }

  getShippingPrices(){
      return this.http.get('/assets/shipping.json')
  }

  getCartTotal(){
      return this.items.length > 0
      ?
      this.items.reduce((a,b) => a + b.price,0)
      :
      0
  }



  constructor(
      private http: HttpClient,
  ) { }

}