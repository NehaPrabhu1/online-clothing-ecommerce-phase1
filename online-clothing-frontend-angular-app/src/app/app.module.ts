import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { DeliveryAddressComponent } from './components/deliveryaddress/deliveryaddress.component';
import { HomeComponent } from './components/home/home.component';
import { CartService } from './services/cart.service';
import { CascadelistService } from './services/cascadelist.service';
import { DeliveryaddressService } from './services/deliveryaddress.service';
import { OrderService } from './services/order.service';
import { ProductsService } from './services/products.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    OrderComponent,
    OrdersComponent,
    HomeComponent,
    DeliveryAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CartService,CascadelistService,DeliveryaddressService,OrderService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
