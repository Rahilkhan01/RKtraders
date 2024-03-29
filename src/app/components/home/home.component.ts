import { Component , OnInit } from '@angular/core';
// import { ApiService } from 'src/app/Service/api.service';
import { CartService } from 'src/app/Service/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
  
})

export class HomeComponent implements OnInit   {

  public productList : any ;
  auth: any;
  api: any;
  constructor (private msg : MessengerService,private cartservice:CartService ) { } 

  ngOnInit(): void{
    //  this.api.getProduct()
    // .subscribe(res=>{
    //   this.productList = res;   
    // })  }
    this.productArray =[
      {
      proId:1,
      headname:"Plain Cooker ",
      img:"./assets/img/cooker1.jpg",
      name:"Diamond",
      amt: 400.00,
      qnt:1
  },
  {
    proId:2,
    headname:"Black Cooker Models",
    img:"./assets/img/blackcooker.jpeg",
    name:"Diamond Black",
    amt: 800.00,
    qnt:1
  },{
    proId:3,
    headname:"Contura Cooker Models",
    img:"./assets/img/contura.webp",
    name:"Contura",
    amt: 1000,
    qnt:1
  },{
    proId:4,
    headname:"Kadai Models",
    img:"./assets/img/kadai.jpg",
    name:"Kadai",
    amt: 1100,
    qnt:1
  }
  ];
  
  }

  addToCart(){
    // this.msg.sendMsg(this.productArray)
    // this.productArray.forEach((a:any)=>{
    //   Object.assign(a,{_quantity:1,_total:a.price})
    // })
    (this.productArray);
    alert('Product added to cart!');
  }
  productArray =[
    {
    proId:1,
    headname:"Plain Cooker ",
    img:"./assets/img/cooker1.jpg",
    name:"Diamond",
    amt: 400.00,
    qnt:1
},
{
  proId:2,
  headname:"Black Cooker Models",
  img:"./assets/img/blackcooker.jpeg",
  name:"Diamond Black",
  amt: 800.00,
  qnt:1
},{
  proId:3,
  headname:"Contura Cooker Models",
  img:"./assets/img/contura.webp",
  name:"Contura",
  amt: 1000,
  qnt:1
},{
  proId:4,
  headname:"Kadai Models",
  img:"./assets/img/kadai.jpg",
  name:"Kadai",
  amt: 1100,
  qnt:1
}
];

// Increment/Dec
inc(item: any){
  // console.log(item.qnt);
  if(item.qnt != 5){
  item.qnt += 1;
 }}
 
dec(item: any){
  //console.log(item.qnt);
  if(item.qnt != 1){
  item.qnt -= 1;
 }
 
}

// itemsCart:any = [];
// addCart(category: any = []){
//   let cartDataNull = 
// localStorage.getItem('localCart');
// if(cartDataNull == null){
//   let storeDataGet:any = [];
// storeDataGet.push(category);
//   localStorage.setItem
//     ('localCart', 
//  JSON.stringify(storeDataGet));
// }
// else{
//   var id = category.proId;
//   let index:number = -1;
//   this.itemsCart = 
// JSON.stringify
// (localStorage.getItem
// ('localCart'));
// for
// (let i=0; i<this.itemsCart.length; 
// i++){
// if(parseInt(id) === 
// parseInt(this.itemsCart[i].proId))
// {
//     this.itemsCart[i].qnt = 
// category.qnt;
//       index = i;
//       break;
//     }
//   }
//   if(index == -1){
// this.itemsCart.push(category);
//     localStorage.setItem
// ('localCart', JSON.stringify
// (this.itemsCart));
//   }
//   else{
//     localStorage.setItem
// ('localCart', JSON.stringify
// (this.itemsCart));
//   }
// }
// }cartNumber:number = 0;
// cartNumberFunc(){
//   var cartValue = JSON.stringify (localStorage.getItem('localCart'));
//   this.cartNumber = cartValue.length;
//   this.auth.cartSubject.next(this.cartNumber);
// }
addtoCart(item:any){
  this.cartservice.addtoCart(item);
}
}





