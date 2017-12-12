import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { addToCart } from './actions/cart.action';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm: FormControl = new FormControl();
  searchResult;
  title = 'app';

  constructor(
    private http: HttpClient,
    private store: Store<any>
  ) {

  }

  ngOnInit(){

    this.store.select('cart')
      .subscribe(val => {
        console.log(val);
      });

    this.store.dispatch(
      {
        type: 'ADD_TO_CART',
        payload: {name: 'product1'}
      }
    );

    this.searchTerm.valueChanges
            .filter(val => val.length > 3)
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(val => this.http.get('https://api.github.com/search/repositories?q='+val))
            .subscribe((result: any) => {
              this.searchResult = result.items
            });
  }
}
