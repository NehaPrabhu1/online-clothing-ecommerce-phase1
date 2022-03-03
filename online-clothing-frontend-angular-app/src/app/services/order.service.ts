import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { mergeMap, Observable } from 'rxjs';
import { ProductSent } from '../models/productstobesent';
import { Order } from '../models/order';
import { Orderline } from '../models/orderline';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders:Order[] = [];
  http:HttpClient;
  orderid:Observable<any>;
  orderlineid:Observable<any>;

  constructor(http:HttpClient) {
    this.http = http;
   }
  //  public createOrderLines(orderid:number, orderlines:Product[],i:number){
  //     let productid = orderlines[i].productid;
  //     let size = orderlines[i].size;
  //     let quantity = orderlines[i].quantity;
  //     let price = orderlines[i].price*(1 - orderlines[i].discount*0.01)*orderlines[i].quantity;
  //     this.orderliney[i] = {orderid,productid,size,quantity,price};
  //     this.sendOrderLines(orderid,this.orderliney,2);
  //  }
   public sendOrderLines(orderid:number, orderlines:ProductSent[]){
     let orderliney = [];
     for(let i=0; i<orderlines.length; i++){
      let productid = orderlines[i].productid;
      let size = orderlines[i].size;
      let quantity = orderlines[i].quantity;
      let price = orderlines[i].price*(1 - orderlines[i].discount*0.01)*orderlines[i].quantity;
      let orderline = {orderid,productid,size,quantity,price};
      orderliney.push(orderline);
     }
     let x:Observable<any>;
    x = this.http.post("http://localhost:3000/api/user/orderpage/orderlines",orderliney);
    return x;
   }

   


   public sendOrder(userid:number, total_payment:number){
     let order = {userid,total_payment};
     this.orderid = this.http.post("http://localhost:3000/api/user/orderpage/orders",order);
     return this.orderid;
   }

   public getAllOrders(){
     let x:Observable<Order[]>;
     x = this.http.get<Order[]>("http://localhost:3000/api/user/orderpage/orders");
    return x;
   }

   public getOrderLinesbyOrderid(id:number){
     let x:Observable<Orderline[]>;
     x = this.http.get<Orderline[]>("http://localhost:3000/api/user/orderpage/orderlines/"+id);
     return x;
   }
}
