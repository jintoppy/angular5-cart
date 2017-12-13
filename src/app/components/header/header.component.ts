import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount = 0;
  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.select('cart')
      .subscribe((cartState) => {
        this.cartCount = cartState.items.length;
      });
  }

}
