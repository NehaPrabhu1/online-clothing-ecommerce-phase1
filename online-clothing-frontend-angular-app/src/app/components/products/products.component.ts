import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Product[] = [];
  gender:string = '';
  constructor(private productsService: ProductsService, public router: Router) {
  }

  ngOnInit() { this.loadProducts();
  }
  loadProducts() : void {
    this.productsService.getProducts().subscribe({
      next: (data : Product[]) => {
        //this.router.navigate(['products']);
        this.products = data;
        return console.log("data: ", data);  
    }, error : (err) => {
        return console.log(err.message);
    }, complete : () => {
        return console.log('completed');
    }});
  }
}
