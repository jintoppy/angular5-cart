import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import {HttpClientModule} from '@angular/common/http';
import { CatalogRoutingModule } from './catalog-routing.module';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductComponent } from './components/product/product.component';
import { CatalogService } from './catalog.service';
import { CatalogComponent } from './components/catalog/catalog.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [ProductlistComponent, ProductComponent, CatalogComponent],
  providers: [CatalogService]
})
export class CatalogModule { }
