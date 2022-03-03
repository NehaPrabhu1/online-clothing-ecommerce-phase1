import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //product: Product;
  constructor() {
    //this.product = product;
  }

  ngOnInit(): void {
  }

}
