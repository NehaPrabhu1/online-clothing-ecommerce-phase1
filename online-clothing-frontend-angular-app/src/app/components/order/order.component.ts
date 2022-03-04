import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orderline } from 'src/app/models/orderline';
import { OrderService } from 'src/app/services/order.service';
import { DeliveryaddressService } from 'src/app/services/deliveryaddress.service';
import { DeliveryAddress } from 'src/app/models/deliveryaddress';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  [x: string]: any;
  order:OrderService;
  address:DeliveryaddressService;
  delAdd:DeliveryAddress[];
  orderlines:Orderline[];
  isloggedIn:boolean;
  constructor(private authService:AuthService,order:OrderService, private route:ActivatedRoute,address:DeliveryaddressService) { 
    this.order = order;
    this.address = address;
  }

  ngOnInit(): void {
    this.isloggedIn= localStorage.getItem('status') ? true : false;
    if(this.isloggedIn){
    const id = parseInt(this.route.snapshot.params['id']);
    this.order.getOrderLinesbyOrderid(id).
    subscribe((data)=>{this.orderlines = data;
      console.log(data);
      this.address.getDeliveryAddress(id)
      .subscribe((data)=>{this.delAdd = data;
      console.log(data)},
      (error)=>{console.log("Error1 "+error);},
      ()=>{})},
    (error)=>{console.log("Error1 "+error)},
    ()=>{})
  }
  else{
    alert("Login First")
  }
}

}
