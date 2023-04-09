import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.apiService.getProduct;
  productArray: any;
  getProductData(){
    return this.productArray.asObservable();
  }
removeall() {
throw new Error('Method not implemented.');
}
 cartItems = [
  {
    productName:'Test1',
    proId:1,
    headname:"Plain Cooker ",
    img:"./assets/img/cooker1.jpg",
    name:"Diamond",
    amt: 400.00,
    qnt:1
},
{
  productName:'Test2',
  proId:2,
  headname:"Black Cooker ",
  img:"./assets/img/blackcooker.jpeg",
  name:"Black",
  amt: 800.00,
  qnt:2
},
  ];
  cartTotal = 0
 constructor(private apiService: ApiService) { }
ngOnInit(){
  this.cartItems.forEach(item =>{
    this.cartTotal += (item.qnt * item.amt)
  })
}
deleteall(){
  localStorage.removeItem('localStorage')
}
}

