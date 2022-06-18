import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { FilterPipe } from '../shared/filter.pipe';
import { HomeComponent } from './home/home.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ProductlistComponent } from './home/productlist/productlist.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SliderComponent } from './home/slider/slider.component';
import { ProductDetailedViewComponent } from './product-detailed-view/product-detailed-view.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    CartComponent,
    HomeComponent,
    FilterPipe,
    SpinnerComponent,
    ProductlistComponent,
    AdminloginComponent,
    SliderComponent,
    ProductDetailedViewComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    FilterPipe,
    FooterComponent,
  ],
})
export class UserModule {}
