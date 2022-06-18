import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './user/cart/cart.component';
import { CheckoutComponent } from './user/cart/checkout/checkout.component';
import { HomeComponent } from './user/home/home.component';
import { ProductDetailedViewComponent } from './user/product-detailed-view/product-detailed-view.component';
import { ProductsComponent } from './user/products/products.component';

import { AuthguardGuard } from './validation-guard/authguard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'home/:id', component: ProductDetailedViewComponent },
  {path:'checkout',component:CheckoutComponent},
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthguardGuard],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
