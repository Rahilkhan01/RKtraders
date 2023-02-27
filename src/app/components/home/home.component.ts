import { Component , OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
  
})

export class HomeComponent implements OnInit   {

  public productList : any ;
  constructor (private api : ApiService ) { } 

  ngOnInit(): void{
     this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;   
    })  }

}
