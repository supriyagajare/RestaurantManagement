import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent {

  location : string = "";
  restaurants : Restaurant[] = [];
  ratings: number=0;
  avgCost : number=0;
  
  constructor(private restService : RestaurantService,
    private router: Router){}

  searchRestaurantByLocation()
  {
    this.restService.findByLocation(this.location).subscribe(details => {
    
      console.log('Response from service:',details);
      this.restaurants= details;

    },
      error => {
        console.log(error);
      });
  }

  private getRestaurants(){
    this.restService.getRestaurantList().subscribe(data => {
      this.restaurants = data;

   });
  }

  restaurantDetails(restaurantId: number){  //4
    this.router.navigate(['restaurant-details', restaurantId]);
  }

  updateRestaurant(restaurantId: number){
    this.router.navigate(['update-restaurant', restaurantId]);
  }

  deleteRestaurant(restaurantId: number){
    this.restService.deleteRestaurantById(restaurantId).subscribe( data => {
      console.log(data);
      this.getRestaurants();
    }
    )
  }

 
}
