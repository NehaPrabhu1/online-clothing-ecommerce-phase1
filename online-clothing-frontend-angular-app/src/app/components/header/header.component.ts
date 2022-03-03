import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  itemInCart:number = 0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.cartItems.subscribe(d=>{
      this.itemInCart = d.length;
    })
  }

}
