import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductSent } from 'src/app/models/productstobesent';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  sizes:string[] =['s','m','l','xl'];
  products:Product[] = [];
  productToBeSent:any;
  productid:number = 0;
  categoryid:number = 0;
  brandid :number=0;
  productname:string ='';
  quantity:number = 1;
  price:number = 0;
  color:string=''; 
  sizeSelected:string = '';
  discount:number=0;
  productimage:string='';
  constructor(private productService:ProductsService, private route:ActivatedRoute,
    private cartService: CartService) {
      
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params['id']);
      this.productService.getProduct(id).
      subscribe((data)=>{
        this.products = data;
        this.productid = this.products[0].productid;
        this.categoryid = this.products[0].categoryid;
        this.brandid = this.products[0].brandid;
        this.productname = this.products[0].product_name;
        this.price = this.products[0].price;
        this.color = this.products[0].color; 
        this.discount = this.products[0].discount;
        this.productimage = this.products[0].product_image;
      },
      (error)=>{console.log(error)},()=>{});

  }
  addToCart(){
    this.productToBeSent = new ProductSent(this.productid,this.categoryid, this.brandid,
      this.productname,this.quantity, this.price,this.color, 
      this.sizeSelected,this.discount, this.productimage);
      console.log(this.productToBeSent);
      this.cartService.addItem(this.productToBeSent);

  }

}
