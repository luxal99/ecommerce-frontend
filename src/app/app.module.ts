import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegistrationDialogComponent } from './home/registration-dialog/registration-dialog.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginDialogComponent } from './home/login-dialog/login-dialog.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    RegistrationDialogComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxUsefulSwiperModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [HttpClientModule],
  entryComponents:[RegistrationDialogComponent,LoginDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
