import { Component } from '@angular/core';
import { OrderDetails } from '../orderdetails';
import { ActivatedRoute } from '@angular/router';
import { FoodOrderServiceService } from '../food-order-service.service';
import { Menu } from '../menu';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';


@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent {


  userID: number=0;
  //orderDetails: OrderDetails[] = [];
  orderDetails: OrderDetails[] = []; 
  foodOrderedByUser : Menu[] = [];
  restaurants: Restaurant[] = [];
  

  constructor(private route: ActivatedRoute, private orderService: FoodOrderServiceService,
    private restaurantService: RestaurantService
    ) { 
   
  }


  deleteUserById(orderId: number){
    var status = confirm("Are you sure to delete this record?");
    if (status == true) {
    this.orderService.deleteOrderById(orderId).subscribe( data => {
      console.log(orderId);
      this.getRestaurants();
    }
    )
  }
  else{
    this.getRestaurants();
  }
  }


  removeAllFoods(){
    var status = confirm("Are you sure to delete all the records?");
    if (status == true) {
      this.orderService.deleteAllRestaurants().subscribe(details => {
        this.getRestaurants();
               console.log(details);
               this.getRestaurants();
            },
              error => {
                console.log(error);
      })
    }
  }


  private getRestaurants(){
    this.restaurantService.getRestaurantList().subscribe(data => {
      this.restaurants = data;

   });
  }

  // removeAllFoods() : void{
  //   var status = confirm("Are you sure to delete all the records?");
  //   if (status == true) {
  //     this.menuService.deleteAllFoods().subscribe(details => {
  //       console.log(details);
  //       this.getRestaurants();
  //     },
  //       error => {
  //         console.log(error);
  //       })
  //   }
  //   else{
  //   this.getRestaurants();
  // }
  // }

  ngOnInit() {
    this.userID = this.route.snapshot.params['userID'];
      this.orderService.getOrderDetails(this.userID)
      .subscribe(
        (data) => {
         
            this.orderDetails = data; 
          console.log(data);
          
        },
        error => {
          console.error('Error fetching order details:', error);
        }
      );
   
  }

  // loadOrderDetails() {
  //   this.orderService.getOrderDetails(this.userID)
  //     .subscribe(
  //       (data: OrderDetails[]) => { 
  //         if (data.length > 0) {
  //           this.orderDetails = data[0]; 
  //         } else {
           
  //         }
  //       },
  //       error => {
  //         console.error('Error fetching order details:', error);
  //       }
  //     );
  // }
  
}

