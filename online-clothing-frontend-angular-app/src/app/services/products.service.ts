import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Product } from '../models/product';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  http:HttpClient;
  baseUrl: string = "http://localhost:3000/api/clothing/auth/products";

  constructor(http:HttpClient) {
    this.http = http;
   }
  

  getProducts(){
    let x:Observable<Product[]>;
    x = this.http.get<Product[]>("http://localhost:3000/api/clothing/auth/products");
    return x;
  }

  getProduct(id:number) {
    let x:Observable<Product[]>;
    x =  this.http.get<Product[]>("http://localhost:3000/api/clothing/auth/products/"+id);
    return x;
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status}\nMessage ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
