import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  route: any;
  submitSearch(val:string){
    console.warn(val)
    this.route.navigate(['search/${val'])
  }
}
