import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  order:OrderService;

  orders:Order[]= [];
  constructor(order:OrderService) {
    this.order = order;
   }

  ngOnInit(): void {
    this.order.getAllOrders().
    subscribe((data)=>{
      this.orders = data;
      console.log(data);
    },
    (error)=>{console.log(error);},
    ()=>{console.log("no further data");})
   }
  

}
