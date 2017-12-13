import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import { getProducts, onProductsReceived } from '../actions/catalog.action';


@Injectable()
export class CatalogService {
  constructor(
    private http: HttpClient,
    private store: Store<any>
  ) { }

  getProducts() {
    this.store.dispatch(getProducts());
    this.http.get('/assets/products.json')
          .subscribe(products => {
            this.store.dispatch(onProductsReceived(products));
          });
  }

  getProductById(productId) {
    const httpObservable = this.http.get('/assets/products.json');
    const modifiedObservable = httpObservable
                                    .map((products: any) => {
                                      return products.find(p => {
                                        return p.id == productId;
                                      });
                                    });
    return modifiedObservable;
  }

}
