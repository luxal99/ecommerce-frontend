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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxUsefulSwiperModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
