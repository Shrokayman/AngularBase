import { AddCategoryComponent } from './admin/manage-categories/add-category/add-category.component';
import { AddBrandComponent } from './admin/manage-brands/add-brand/add-brand.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { ManageCategoriesComponent } from './admin/manage-categories/manage-categories.component';
import { ManageBrandsComponent } from './admin/manage-brands/manage-brands.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ProductDetailsComponent } from './core/product-feature/product-details/product-details.component';
import { HomeComponent } from './core/home/home.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './appInfo/contact/contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './appInfo/about/about.component';
import { ProductListingComponent } from './core/product-feature/product-listing/product-listing.component';
import { CartComponent } from './core/cart/cart.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent },
  {path:'contact' , component:ContactComponent},
  {path:'cart/list' , component:CartComponent},
  {path:'product/listing' , component:ProductListingComponent},
  {path:'product/details' , component:ProductDetailsComponent},
  {path:'admin' , component:AdminHomeComponent},
  {path:'admin/home' , component:AdminHomeComponent},
  {path:'admin/brands' , component:ManageBrandsComponent},
  {path:'admin/brands/add' , component:AddBrandComponent},
  {path:'admin/categories' , component:ManageCategoriesComponent},
  {path:'admin/categories/add' , component:AddCategoryComponent},
  {path:'admin/orders' , component:ManageOrdersComponent},
  {path:'admin/products' , component:ManageProductsComponent},
  {path:'admin/products/add' , component:ManageProductsComponent},
  {path:'admin/users' , component:ManageUsersComponent},
  {path:'**' , component:NotFoundComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes , {scrollPositionRestoration : 'top'})],
    exports: [RouterModule]
})

export class AppRoutingModule { }
