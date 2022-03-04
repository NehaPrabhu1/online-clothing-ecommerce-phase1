import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http:HttpClient;
  user:any;


  constructor(http:HttpClient, private router:Router) {
    this.http = http;
   }

   validateUser(mail:string, pass:string){
    let x:Observable<any>;
    let user = {useremail:mail,password:pass};
    x =  this.http.post("http://localhost:3000/api/user/auth/login",user); 
    x.
    subscribe((data)=>{
      this.user = data.u;
      localStorage.setItem('id_token', data.accessToken);
      localStorage.setItem('status','loggedin');
      alert("login successful. Welcome "+data.u.first_name);
      this.router.navigate(['home']);
      window.location.reload();
    },
    (error)=>{
      alert("login failed !!");
      console.log(error)},
    ()=>{});
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("status");
    alert("You have logged out.")
  }

}
