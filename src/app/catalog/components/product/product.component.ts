import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../../catalog.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private service: CatalogService
  ) { }

  ngOnInit() {
    // this.route.params
    //   .subscribe(param => {
    //     console.log(param.productId);
    //     this.service.getProductById(param.productId)
    //       .subscribe(product => {
    //         this.product = product;
    //       });
    //   });
   

    this.route.params
      .switchMap(param => this.service.getProductById(param.productId))
      .subscribe(product => {
        this.product = product;
      });
    
      
    

  }

}
