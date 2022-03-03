import { Component, OnInit } from '@angular/core';
import { CascadelistService } from 'src/app/services/cascadelist.service';
import { DeliveryaddressService } from 'src/app/services/deliveryaddress.service';
import { ActivatedRoute } from '@angular/router';
import { DeliveryAddress } from 'src/app/models/deliveryaddress';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliveryaddress',
  templateUrl: './deliveryaddress.component.html',
  styleUrls: ['./deliveryaddress.component.css']
})
export class DeliveryAddressComponent implements OnInit {
  orderid:number;
  addline:string;
  street:string;
  zip:string;
  country:string;
  city:string;

  countries:any;
  cities:any;
  selectedCountry:any = {
   name:''
  };

  dataservice:CascadelistService;
  deliveryaddress:DeliveryaddressService;
  route:ActivatedRoute;
  router:Router;

  constructor(dataservice:CascadelistService, deliveryaddress:DeliveryaddressService, route:ActivatedRoute,router:Router) {
    this.dataservice = dataservice;
    this.deliveryaddress = deliveryaddress;
    this.route = route;
    this.router = router;
   }

  ngOnInit(): void {
    this.orderid = parseInt(this.route.snapshot.params['id']);
    this.showAll();
    this.onSelect(this.selectedCountry.name);
  }

  showAll(){
    this.dataservice.getAll().subscribe(
      (data:any) => {
        this.countries = data,
        console.log(this.countries);
      }
    )
  }
  onSelect(country_name:any){
    this.dataservice.getAll().subscribe((res:any)=>{
      this.cities = res['cities'].filter((res:any)=>res.country_name == country_name!.value),
      console.log(this.cities);
    })
  }
  onSubmit(){
    this.deliveryaddress.sendDeliveryAddres(this.orderid,
      this.addline,this.street,this.city,this.zip,this.country).subscribe((result)=>{
        console.log(result);
        alert("Your Order has been successfully placed !!!")
        this.router.navigate(["orders"]);
      },(error)=>{
        console.log(error);
      },()=>{})
  }
}
