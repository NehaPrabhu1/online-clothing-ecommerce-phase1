import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
//import { Router } from '../../../../../online-clothing-backend-nodejs-app/src/routes/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Product[] = [];
  constructor(private productsService: ProductsService, public router: Router) {
  }

  ngOnInit(): void { this.loadProducts();
  }
  loadProducts() : void {
    //console.log("asdasd");
    //console.log(this.productsService);
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
