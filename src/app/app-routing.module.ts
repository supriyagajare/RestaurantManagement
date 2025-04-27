import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { AboutRestaurantComponent } from './about-restaurant/about-restaurant.component';
import { LoginComponent} from './login/login.component';
import { LogoutComponent} from './logout/logout.component';
import { AuthGaurdServiceService } from './auth-gaurd-service.service';
import { SearchLocationComponent} from './search-location/search-location.component';
import { ViewCustomerComponent} from './view-customer/view-customer.component';
import { BookTableComponent } from './book-table/book-table.component';
import { ViewMenuComponent} from './view-menu/view-menu.component';
import { AddFoodmenuComponent} from './add-foodmenu/add-foodmenu.component';
import { FoodOrderComponent } from './food-order/food-order.component';
import { SignupComponent } from './signup/signup.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { FeedbackUserComponent } from './feedback-user/feedback-user.component';


const routes: Routes = [
  {path:'restaurants', component:RestaurantListComponent, canActivate:[AuthGaurdServiceService]},
  {path:'create-restaurant', component:CreateRestaurantComponent, canActivate:[AuthGaurdServiceService]},
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'update-restaurant/:restaurantId', component:UpdateRestaurantComponent, canActivate:[AuthGaurdServiceService]},
  {path:'restaurant-details/:restaurantId', component:RestaurantDetailsComponent, canActivate:[AuthGaurdServiceService]}, //restaurant-details/:4
  {path: 'about-restaurant', component:AboutRestaurantComponent, canActivate:[AuthGaurdServiceService]},
  {path: 'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdServiceService]},
  {path: 'SearchLocationComponent', component: SearchLocationComponent, canActivate:[AuthGaurdServiceService]},
  {path: 'view-user/:restaurantId', component: ViewCustomerComponent, canActivate:[AuthGaurdServiceService]},
  {path: 'book-table/:restaurantId', component: BookTableComponent, canActivate:[AuthGaurdServiceService]},
  {path: 'view-menu/:restaurantId', component:ViewMenuComponent, canActivate:[AuthGaurdServiceService]},
  {path: 'add-menu/:restaurantId', component:AddFoodmenuComponent, canActivate:[AuthGaurdServiceService]},
  {path: 'food-order', component:FoodOrderComponent, canActivate:[AuthGaurdServiceService]},
  {path: 'view-orders/:userID',component:ViewOrdersComponent, canActivate:[AuthGaurdServiceService]},
  {path: 'feedback-user/:restaurantId/:userId', component:FeedbackUserComponent, canActivate:[AuthGaurdServiceService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
