import { Component} from '@angular/core';
// import { ApiService } from '../../Service/api.service';
import { CartService } from '../../Service/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getProducts();
  productArray: any;
  cartItems = [
    { 
      proid: '1',
      headname: 'Product 1',
      amt: '$1.00',
      qnt: '1'
      },
      
  ];
  cartTotal = 0
 constructor(private cartService: CartService) { 

// ngOnInit(): void{
//     this.cartItems.forEach(item =>{
//     this.cartTotal += (item.qnt * item.amt)
//  })
this.cartItems = this.cartService.getCart();
this.cartItems = this.cartService.cartItems().value;
}
}
// deleteall(){
//   localStorage.removeItem('localStorage')
// }
// getProductData() {
//   return this.productArray.asObservable();
// }
// calculateCartTotal() {
//   this.cartItems.forEach(item => {
//     this.cartTotal += item.qnt * item.amt;
//   });
// }
// }

