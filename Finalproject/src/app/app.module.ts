import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartComponent } from './Components/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReviewCartComponent } from './Components/review-cart/review-cart.component';
import { UpdateCartComponent } from './Components/update-cart/update-cart.component';
import { HomeComponent } from './Components/home/home.component';
import { ItemDetailsComponent } from './Components/item-details/item-details.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ReviewCartComponent,
    UpdateCartComponent,
    HomeComponent,
    ItemDetailsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
