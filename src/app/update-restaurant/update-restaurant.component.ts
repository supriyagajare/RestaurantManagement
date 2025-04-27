import { Component,OnInit } from '@angular/core';
import { Restaurant } from '../restaurant'
import { RestaurantService } from '../restaurant.service'
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent  implements OnInit {

  restaurantId: number = 0;
  restaurant: Restaurant = new Restaurant();
  constructor(private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.params['restaurantId'];

    this.restaurantService.getRestaurantById(this.restaurantId).subscribe(data => {
      this.restaurant = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.restaurantService.updateRestDetailsById(this.restaurantId, this.restaurant).subscribe( data =>{
      this.goToRestaurantList();
    }
    , error => console.log(error));
  }

  goToRestaurantList(){
    this.router.navigate(['/restaurants']);
  }
}
