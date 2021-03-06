import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from "./cart/cart.component";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginService } from './service/login.service';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminDashboardComponent,canActivate: [LoginService] },
  {path:'detail/:id',component:ProductDetailComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
