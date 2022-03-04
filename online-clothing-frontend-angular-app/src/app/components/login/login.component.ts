import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  user:any;
  access_token:any;
  islogin:boolean;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.islogin = localStorage.getItem('status') ? true : false;
  }

  onSubmit(form: NgForm){
    this.authService.validateUser(this.email,this.password);
  }
  
}
