import { Component, OnInit, TemplateRef } from '@angular/core';
import { CatalogService } from '../../catalog.service';
import { MatDialog, MatDialogRef } from '@angular/material';

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
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.service.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  addToCart(template: TemplateRef<any>) {
    this.addToCartModal = this.dialog.open(template);
  }

  closeModal(e) {
    e.preventDefault();
    this.addToCartModal.close();
  }

}
