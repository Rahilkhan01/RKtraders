import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '',component: HomeComponent
  },
  {
    path: 'header/:id',component: HeaderComponent
  },
  {
    path: 'footer/:id',component: FooterComponent
  },
  {
    path: 'cart',component: CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
