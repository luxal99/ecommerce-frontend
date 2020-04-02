import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'detail/:id',component:ProductDetailComponent},
  {path:'admin',component:AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
