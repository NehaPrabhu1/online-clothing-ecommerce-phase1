import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DeliveryAddressComponent } from './components/deliveryaddress/deliveryaddress.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'apparel',component:ProductsComponent},
  {path:'apparel/:id',component:ProductComponent},
  {path:'apparel/gender/:gender',component:ProductCategoryComponent},
  {path:'cart',component:CartComponent},
  {path:'orders',component:OrdersComponent},
  {path:'orders/:id',component:OrderComponent},
  {path:'delivery-address/:id', component:DeliveryAddressComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'login',component:LoginComponent}
  //{path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
