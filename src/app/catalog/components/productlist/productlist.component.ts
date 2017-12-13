import { Component, OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';

import { CatalogService } from '../../catalog.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { addToCart } from '../../../actions/cart.action';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: any = [];
  addToCartModal: MatDialogRef<any>;
  constructor(
    private service: CatalogService,
    private dialog: MatDialog,
    private store: Store<any>
  ) { }

  ngOnInit() {    
    this.service.getProducts();
    this.store.select('catalog')
      .subscribe(catalogState => {
        this.products = catalogState.items;
      });
  }

  addToCart(template: TemplateRef<any>, product) {
    this.store.dispatch(addToCart(product));
    this.addToCartModal = this.dialog.open(template);
  }

  closeModal(e) {
    e.preventDefault();
    this.addToCartModal.close();
  }

}
