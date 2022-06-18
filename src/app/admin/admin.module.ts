import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { AddProductFromComponent } from './add-product-from/add-product-from.component';
import { UpdateProductFromComponent } from './update-product-from/update-product-from.component';
import { DeleteProductFromComponent } from './delete-product-from/delete-product-from.component';
import { UserSignupDataComponent } from './user-signup-data/user-signup-data.component';
@NgModule({
  declarations: [
    AdminComponent,
    AddProductFromComponent,
    UpdateProductFromComponent,
    DeleteProductFromComponent,
    UserSignupDataComponent,
    UserSignupDataComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
})
export class AdminModule {}
