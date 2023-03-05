import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { HistoryComponent } from './history/history.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { SellersignupComponent } from './components/sellersignup/sellersignup.component';

const routes: Routes = [
  {
    path: '',component: HomeComponent
  },
  {
    path: 'history',component: HistoryComponent 
  },
  {
    path: 'confirmation',component: ConfirmationComponent
  },
  {
    path: 'Signup',component: SellersignupComponent
  },
  {
    path: 'Cart',component: CartComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
