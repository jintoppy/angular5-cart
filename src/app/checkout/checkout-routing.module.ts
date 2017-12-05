import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ShippingComponent,
        pathMatch: 'full'
      },
      {
        path: 'payment',
        component: PaymentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
