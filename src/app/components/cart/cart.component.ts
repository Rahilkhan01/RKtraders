import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
 cartItems = [
  {
    proId:1,
    headname:"Plain Cooker ",
    img:"./assets/img/cooker1.jpg",
    name:"Diamond",
    amt: 400,
    qnt:1
},
{
  proId:2,
  headname:"Black Cooker ",
  img:"./assets/img/blackcooker.jpeg",
  name:"Black",
  amt: 800,
  qnt:1
},
  ];
  cartTotal = 0
 constructor() { }
ngOnInit(){
  this.cartItems.forEach(item =>{
    this.cartTotal += (item.qnt * item.amt)
  })
}
}

