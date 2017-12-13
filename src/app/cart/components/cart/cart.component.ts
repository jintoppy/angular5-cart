import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeFromCart } from '../../../actions/cart.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.select('cart')
      .subscribe(cartState => {
        this.cartItems = cartState.items;
      });
  }

  removeItem(itemIndex) {
    this.store.dispatch(removeFromCart(itemIndex));
  }

}
