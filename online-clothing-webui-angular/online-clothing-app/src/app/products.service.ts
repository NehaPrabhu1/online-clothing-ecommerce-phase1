import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
//import { Products } from "./products";
import { Product } from './model/product';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {
  baseUrl: string = "http://localhost:3000/api/clothing/auth";

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/products`, {observe: 'body', responseType: 'json'})
    .pipe(retry(1),catchError(this.handleError));
  }

  getProduct(id: string) {
    return this.http.get<Product[]>(`${this.baseUrl}/products/${id}`, {observe: 'body', responseType: 'json'})
    .pipe(retry(1),catchError(this.handleError));
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
