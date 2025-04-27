import { Component,OnInit,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {User} from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  restaurantId: number = 0;
  user: any = [];
  startDate: Date | null = null;
  endDate: Date | null = null;
  
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private cdRef: ChangeDetectorRef) {

    
    }

  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.params['restaurantId'];   

    this.user = new User();
    this.userService.getUsersByRestaurantId(this.restaurantId).subscribe( data => {
      console.log(data);
      this.user = data;

    });
    
  }


  deleteDataBtnRange(startDate: Date | null, endDate: Date | null): void {
    if (startDate && endDate) {
      this.user = new User(); // Assuming you're resetting user data
  
      this.userService.deleteDataBtnRange(startDate, endDate).subscribe(
        response => {
          console.log('Data deleted successfully', response);
          this. goToRestaurantList();
        },
        error => {
          console.error('Error deleting data', error);
        }
      );
    } else {
      console.log('Start date or end date is missing.');
    }
  }

    goToRestaurantList(){
    this.router.navigate(['restaurants']);
  }
  
  
viewOrders(userID?:number){
  this.router.navigate(['view-orders',userID]);
}
  

  // this.userID = this.route.snapshot.params['userID'];

  //   this.userService.getUsersByRestaurantId(this.userID).subscribe(data => {
  //     this.user = data;
  //     this.cdRef.detectChanges();
  //   }, error => console.log(error));



  
 }
