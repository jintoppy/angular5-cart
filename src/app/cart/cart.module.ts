import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { MiniCartComponent } from './components/mini-cart/mini-cart.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  declarations: [MiniCartComponent, CartComponent]
})
export class CartModule { }
