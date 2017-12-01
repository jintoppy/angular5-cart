import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { ShippingComponent } from './components/shipping/shipping.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ],
  declarations: [ShippingComponent, PaymentComponent]
})
export class CheckoutModule { }
