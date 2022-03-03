import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliveryAddress } from '../models/deliveryaddress';

@Injectable({
  providedIn: 'root'
})
export class DeliveryaddressService {
  http:HttpClient
  constructor(http:HttpClient) { 
    this.http = http;
  }

  sendDeliveryAddres(orderid:number,addressline:string,street:string, city:string, zip:string, country:string){
    let address = {addressline,street, city, zip, country};
    let x:Observable<any>;
    x = this.http.post("http://localhost:3000/api/user/order/delivery/"+orderid, address);
    return x;
  }

  getDeliveryAddress(orderid:number){
    let x:Observable<DeliveryAddress[]>;
    x = this.http.get<DeliveryAddress[]>("http://localhost:3000/api/user/order/delivery/"+orderid);
    return x;
  }
}