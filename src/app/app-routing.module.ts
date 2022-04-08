import { UserOrderDetailsComponent } from './core/user-orders/user-order-details/user-order-details.component';
import { WishlistComponent } from './core/product-feature/wishlist/wishlist.component';
import { AdminGuard } from './_guards/admin.guard';
import { AddCategoryComponent } from './admin/manage-categories/add-category/add-category.component';
import { AddBrandComponent } from './admin/manage-brands/add-brand/add-brand.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { ManageCategoriesComponent } from './admin/manage-categories/manage-categories.component';
import { ManageBrandsComponent } from './admin/manage-brands/manage-brands.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { EditProductComponent } from './admin/manage-products/edit-product/edit-product.component';
import { ProductDetailsComponent } from './core/product-feature/product-details/product-details.component';
import { HomeComponent } from './core/home/home.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './appInfo/contact/contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AboutComponent } from './appInfo/about/about.component';
import { ProductListingComponent } from './core/product-feature/product-listing/product-listing.component';
import { CartComponent } from './core/cart/cart.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { EditUserComponent } from './admin/manage-users/edit-user/edit-user.component';
import { OrderDetailsComponent } from './admin/manage-orders/order-details/order-details.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { CheckoutComponent } from './core/cart/checkout/checkout.component';
import { AddProductComponent } from './admin/manage-products/add-product/add-product.component';
import { UserProfileComponent } from './core/user-profile/user-profile.component';
import { UserGuard } from './_guards/user.guard';
import { ChildrenGuard } from './_guards/admin/children.guard';
import { HighToLowComponent } from './core/product-feature/high-to-low/high-to-low.component';
import { LowToHighComponent } from './core/product-feature/low-to-high/low-to-high.component';
import { CategoryComponent } from './core/product-feature/category/category.component';
import { BrandComponent } from './core/product-feature/brand/brand.component';
import { UserOrdersComponent } from './core/user-orders/user-orders.component';



const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'home' , component:HomeComponent},
  {path:'hightolow' , component:HighToLowComponent},
  {path:'lowtohigh' , component:LowToHighComponent},
  {path:'category/:id' , component:CategoryComponent},
  {path:'brand/:id' , component:BrandComponent},
  {path:'about' , component:AboutComponent },
  {path:'contact' , component:ContactComponent},
  {
    path:'profile/:id' , component:UserProfileComponent,
    canActivate: [UserGuard]
  },
  {
    path:'cart/list/:id' , component:CartComponent,
    canActivate: [UserGuard]
  },
  {
    path:'orders/:id' , component:UserOrdersComponent,
    canActivate: [UserGuard]
  },
  {
    path:'orders/details/:id' , component:UserOrderDetailsComponent,
    canActivate: [UserGuard]
  },
  {
    path:'cart/Checkout' , component:CheckoutComponent,
    canActivate:[UserGuard]
  },
  {path:'product/listing' , component:ProductListingComponent},
  {path: 'product/details/:id', component: ProductDetailsComponent},
  {path:'product/wishlist' , component:WishlistComponent},
  {
    path:'admin',
  canActivate:[AdminGuard],
  canActivateChild:[ChildrenGuard],
      children: [
        {path: '' , component:AdminHomeComponent},
        {path: 'home' , redirectTo:'' , pathMatch: 'full'},
        {path:'brands' , component:ManageBrandsComponent},
        {path:'brands/add' , component:AddBrandComponent},
        {path:'categories' , component:ManageCategoriesComponent},
        {path:'categories/add' , component:AddCategoryComponent},
        {path:'orders' , component:ManageOrdersComponent},
        {path:'orders/details/:id' , component:OrderDetailsComponent},
        {path:'products' , component:ManageProductsComponent},
        {path:'products/add' , component:AddProductComponent},
        {path:'users' , component:ManageUsersComponent},
        {path:'users/edit/:id' , component:EditUserComponent},
        {path:'profile/:id' , component:AdminProfileComponent},
        {path:'products/edit/:id' , component:EditProductComponent},

    ]
  },
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'**' , component:NotFoundComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes , {scrollPositionRestoration : 'top'})],
    exports: [RouterModule]
})

export class AppRoutingModule { }
