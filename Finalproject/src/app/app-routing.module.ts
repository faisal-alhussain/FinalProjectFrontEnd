import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { NgModule } from '@angular/core';
import { ReviewCartComponent } from './Components/review-cart/review-cart.component';
import { UpdateCartComponent } from './Components/update-cart/update-cart.component';
import { HomeComponent } from './Components/home/home.component';
import { ItemDetailsComponent } from './Components/item-details/item-details.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';

const routes: Routes = [
    {
        path: "shopping",
        component: CartComponent
      },
    {
      path: "review",
      component: ReviewCartComponent
    },
    {
      path: "",
      component: HomeComponent
    },
    {
      path: "update",
      component: UpdateCartComponent
    } ,
    { path: 'item/:id',
    component: ItemDetailsComponent  },
    { path: 'about_us',
    component: AboutUsComponent  }
    
    
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule { }