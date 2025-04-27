import { Component, OnInit } from '@angular/core';
import { OrderDetails } from '../orderdetails';
import { FoodOrderServiceService } from '../food-order-service.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-food-order',
  templateUrl: './food-order.component.html',
  styleUrls: ['./food-order.component.css']
})
export class FoodOrderComponent implements OnInit {

  // orderDetails: OrderDetails = {
  //   orderId: 0,
  //   user: {
  //     userID: 0,
  //     userName: '',
  //     userEmail: '',
  //     date: '',
  //     // Initialize other user properties as needed
  //   },
  //   menu: {
  //     foodId: 0,
  //   foodName: '',
  //   foodPrice:0,
  //   foodQuantity: 0,
  //   imageData: null,
  //   }
  // };

  orderDetails: any = {}; 

  

  constructor(private foodOrderService: FoodOrderServiceService,
     private route: ActivatedRoute,private router: Router) { }

     userIdFromQueryParam: number | null = null;
     foodIdFromQueryParam: number | null = null;
   
    
   
     ngOnInit() {
       this.route.queryParams.subscribe(params => {
         this.userIdFromQueryParam = +params['userId'] || null;
         this.foodIdFromQueryParam = +params['foodId'] || null;

         this.orderDetails.user = { userID: this.userIdFromQueryParam };
         this.orderDetails.menu = { foodId: this.foodIdFromQueryParam };
      
       });
     }



     createOrder(): void {
      console.log(this.orderDetails.user.userID);
      console.log(this.orderDetails.menu.foodId);
  
      this.foodOrderService.createOrder(this.orderDetails)
        .subscribe(
          (response) => {
            console.log('Order created:', response);
            this.goToRestaurantList();
            // Handle success, display a message, or navigate to another page
          },
          (error) => {
            console.error('Error creating order:', error);
            // Handle error, display an error message, etc.
          }
        );
    }


    goToRestaurantList(){
      this.router.navigate(['restaurants']);
    }
    

}


