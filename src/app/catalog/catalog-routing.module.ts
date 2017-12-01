import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductlistComponent
  },
  {
    path: 'product/:productId',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
