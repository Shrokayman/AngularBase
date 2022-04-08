import { OrderService } from 'src/app/_service/order.service';

import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './appInfo/about/about.component';
import { ContactComponent } from './appInfo/contact/contact.component';
import { ProductListingComponent } from './core/product-feature/product-listing/product-listing.component';
import { HomeComponent } from './core/home/home.component';
import { ProductDetailsComponent } from './core/product-feature/product-details/product-details.component';
import { CartComponent } from './core/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { WishlistComponent } from './core/product-feature/wishlist/wishlist.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { ManageCategoriesComponent } from './admin/manage-categories/manage-categories.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { ManageBrandsComponent } from './admin/manage-brands/manage-brands.component';
import { AddBrandComponent } from './admin/manage-brands/add-brand/add-brand.component';
import { AddCategoryComponent } from './admin/manage-categories/add-category/add-category.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SearchBoxComponent } from './shared/search-box/search-box.component';
import { EditUserComponent } from './admin/manage-users/edit-user/edit-user.component';
import { AddProductComponent } from './admin/manage-products/add-product/add-product.component';
import { OrderDetailsComponent } from './admin/manage-orders/order-details/order-details.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { CheckoutComponent } from './core/cart/checkout/checkout.component';
import { UserProfileComponent } from './core/user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { EditProductComponent } from './admin/manage-products/edit-product/edit-product.component';
import { ProductItemComponent } from './core/product-feature/product-item/product-item.component';
import { FilterPipe } from './search-handling/filter.pipe';
import { LowToHighComponent } from './core/product-feature/low-to-high/low-to-high.component';
import { HighToLowComponent } from './core/product-feature/high-to-low/high-to-low.component';
import { CategoryComponent } from './core/product-feature/category/category.component';
import { BrandComponent } from './core/product-feature/brand/brand.component';
import { UserOrdersComponent } from './core/user-orders/user-orders.component';
import { UserOrderDetailsComponent } from './core/user-orders/user-order-details/user-order-details.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ProductListingComponent,
    HomeComponent,
    ProductDetailsComponent,
    CartComponent,
    SidenavComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    LoginComponent,
    RegisterComponent,
    WishlistComponent,
    ManageUsersComponent,
    ManageProductsComponent,
    ManageCategoriesComponent,
    ManageOrdersComponent,
    ManageBrandsComponent,
    AddBrandComponent,
    AddCategoryComponent,
    NotFoundComponent,
    SearchBoxComponent,
    EditUserComponent,
    AddProductComponent,
    OrderDetailsComponent,
    AdminProfileComponent,
    CheckoutComponent,
    UserProfileComponent,
    EditProductComponent,
    ProductItemComponent,
    FilterPipe,
    LowToHighComponent,
    HighToLowComponent,
    CategoryComponent,
    BrandComponent,
    UserOrdersComponent,
    UserOrderDetailsComponent,
  

  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
