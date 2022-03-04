import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  itemInCart:number = 0;
  islogin:boolean;
  constructor(private cartService:CartService, private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.islogin = localStorage.getItem('status') ? true : false;
    this.cartService.cartItems.subscribe(d=>{
      this.itemInCart = d.length;
    })
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['home']);
    window.location.reload();

  }

}
