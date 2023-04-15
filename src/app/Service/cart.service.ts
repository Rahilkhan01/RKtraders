import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getProductArray() {
    throw new Error('Method not implemented.');
  }
  getroductArray: any;
  getproductArray() {
    throw new Error('Method not implemented.');
  }
  getCart(): never[] {
    throw new Error('Method not implemented.');
  }
public cartItems:any = []
public productArray = new BehaviorSubject<any>([]);
  constructor() { }
  getProducts(){
    return this.productArray.asObservable();
  }
  getProductsproductArray(){
    return this.productArray;
  }
  setProduct(product: any){
    this.cartItems.push(...product);
    this.productArray.next(product);
  }
  addtoCart(product:any){
    this.cartItems.push(product);
    this.productArray.next(this.productArray.value + 1);
    this.getTotalPrice();
    console.log(this.cartItems)
  }
  getTotalPrice(){
    // let grandTotal=0;
    // this.cartItems.map((a:any)=>{
    //   grandTotal += a.total;
    // })
    return this.getTotalPrice;
  }
  deleteall(){
    // localStorage.removeItem('localStorage')
    this.cartItems=[]
    this.productArray.next(this.cartItems);
      
  }
}
