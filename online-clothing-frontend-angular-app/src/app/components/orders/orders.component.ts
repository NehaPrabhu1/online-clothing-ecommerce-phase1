import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  order:OrderService;
  orders:Order[]= [];
  isloggedIn:boolean;
  constructor(order:OrderService, private authService:AuthService) {
    this.order = order;
   }

  ngOnInit(): void {
    this.isloggedIn= localStorage.getItem('status') ? true : false;
    if(this.isloggedIn){
      console.log(localStorage.getItem("id_token"));
    this.order.getAllOrders().
    subscribe((data)=>{
      this.orders = data;
      console.log(data);
    },
    (error)=>{console.log(error);},
    ()=>{console.log("no further data");})
   }
   else{
     alert("Login First")
   }
  }

}
