import { DashboardComponent } from './admin/dashboard/dashboard.component';
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


const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'about' , component:AboutComponent },
  {path:'contact' , component:ContactComponent},
  {path:'cart/list' , component:CartComponent},
  {path:'product/listing' , component:ProductListingComponent},
  {path:'product/details' , component:ProductDetailsComponent},
  {path:'admin/home' , component:AdminHomeComponent},
  {path:'admin/dashboard' , component:DashboardComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes , {scrollPositionRestoration : 'top'})],
    exports: [RouterModule]
})

export class AppRoutingModule { }
