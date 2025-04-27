import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule} from '@angular/forms';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AboutRestaurantComponent } from './about-restaurant/about-restaurant.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchLocationComponent } from './search-location/search-location.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { BookTableComponent } from './book-table/book-table.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { AddFoodmenuComponent } from './add-foodmenu/add-foodmenu.component';
import { FoodOrderComponent } from './food-order/food-order.component';
import { SignupComponent } from './signup/signup.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { FeedbackUserComponent } from './feedback-user/feedback-user.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateRestaurantComponent,
    RestaurantDetailsComponent,
    RestaurantListComponent,
    UpdateRestaurantComponent,
    AboutRestaurantComponent,
    LoginComponent,
    LogoutComponent,
    SearchLocationComponent,
    ViewCustomerComponent,
    BookTableComponent,
    ViewMenuComponent,
    AddFoodmenuComponent,
    FoodOrderComponent,
    SignupComponent,
    ViewOrdersComponent,
    FeedbackUserComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
