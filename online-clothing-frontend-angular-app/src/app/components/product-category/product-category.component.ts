import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  products : Product[] = [];
  gender:any;
  constructor(private router: Router, private activeRoute:ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.gender = this.activeRoute.snapshot.paramMap.get('gender');
    this.productService.getProductsByGender(this.gender).
    subscribe((data)=>{
      this.products = data;
    },(error)=>{console.log(error);},
    ()=>{});
  }

}
