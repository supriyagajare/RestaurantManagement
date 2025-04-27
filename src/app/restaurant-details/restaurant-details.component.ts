import { Component, OnInit} from '@angular/core';
import { Restaurant } from '../restaurant';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { RestaurantService } from '../restaurant.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  //restaurant-details/:restId  //restaurant-details/:4
  user: any=[];
  restaurants: Restaurant[] = [];
  restaurantId: number = 0;
  restaurant: any = [];
  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService
    , private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.params['restaurantId'];   //4

    this.restaurant = new Restaurant();
    this.restaurantService.getRestaurantById(this.restaurantId).subscribe( data => {
      this.restaurant = data;
    });
  }

  // private getRestaurants(){
  //   this.restaurantService.getRestaurantList().subscribe(data => {
  //     this.restaurants = data;

  //  });
  // }


  addBooking(restaurantId?:number){
    var status = confirm("Are you sure to Add the records?");
    if (status == true) {
      this.router.navigate(['book-table',restaurantId]);
      }
    
    else{
    console.log("Error in booking")
  }
  }


  addFoodMenu(restaurantId?:number){
    var status = confirm("Are you sure to Add the records?");
    if (status == true) {
      this.router.navigate(['view-menu',restaurantId]);
      }
    
    else{
    console.log("Error in booking")
  }
  }
  

  
}

