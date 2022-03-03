import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductSent } from 'src/app/models/productstobesent';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:ProductSent[] = [];
  total:number = 0;
  subtotal:number;
  discount:number;
  orderService: OrderService;
  router:Router;
  constructor(private cartService: CartService, orderService: OrderService, router:Router) {
    this.orderService = orderService;
    this.router = router;
   }

  ngOnInit(): void {
    this.cartService.cartItems.subscribe(data=>{
      this.items = data;

      if(this.items) this.getTotal(this.items);
    });
  }

  onDelete(i:number){
    this.items.splice(i,1);
    this.cartService.setCartData(this.items);
    if(this.items){
      this.getTotal(this.items);
    }
  }

  validateInput(event:any, i:number){
    const q = parseInt(event.target.value);
    if(q<1){
      event.target.value = this.items[i].quantity;
      return;
    }
    this.QuantityUpdated(q,i);
  }

  private QuantityUpdated(q:number, i:number){
    this.items[i].quantity = q;
    this.cartService.setCartData(this.items);
    this.getTotal(this.items);
  }

  emptyCart(){
    this.items = [];
    this.cartService.setCartData(this.items);
  }

  onCheckout(){
    let orderid = 0;
    this.orderService.sendOrder(2,this.total).
    subscribe((response)=>{
      orderid = response;
    this.orderService.sendOrderLines(orderid, this.items).
    subscribe((data)=>{
      console.log(data);
      this.emptyCart();
       alert("Checkout successfully !!");
       this.router.navigate(["delivery-address",orderid]);
    },(error)=>{
      console.log(error);
      alert("Checkout not successful");
    },()=>{})
    }, (error)=>{
      console.log(error);
    },()=>{});
    
  }

  getTotal(data:any){
    let subs = 0;
    let dis = 0;
    for(const item of data){
      subs += item.price * item.quantity;
      dis += item.discount *0.01 *item.price * item.quantity;
    }
    this.subtotal = subs;
    this.discount = dis;
    this.total = subs - dis;
  }

}
