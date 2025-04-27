import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service.service';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  restaurants: Restaurant[] = [];

  constructor(
    private restaurantService: RestaurantService,
    private authenticationService: AuthenticationServiceService,
    private router: Router) {

  }
  
  private getRestaurants(){
    this.restaurantService.getRestaurantList().subscribe(data => {
      this.restaurants = data;

   });
  }

  
  ngOnInit() {
    var status = confirm("Are you sure to Log Out?");
    if (status == true) {
      this.authenticationService.logOut();
      this.router.navigate(['logout']);
    }
    else{
      this.router.navigate(['restaurants']);
    }
  }
 
}
