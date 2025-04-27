import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { Restaurant } from '../restaurant';
import { EmailService } from '../email.service';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {

  userEmail: string="";
  restaurantId: number=0;
  user: User = new User(); 
  formattedDate!: string;
  restaurant:Restaurant = new Restaurant();

 

  constructor(private userservice: UserService,private route: ActivatedRoute,
    private router: Router, private emailservice:EmailService, private restaurantService:RestaurantService,
    ) { }

  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.params['restaurantId'];
    //this.userEmail = this.route.snapshot.paramMap.get('userEmail');
    this.formattedDate = this.getFormattedDate();
    this.restaurantService.getRestaurantById(this.restaurantId).subscribe(data => {
      this.restaurant = data;
    }, error => console.log(error));
  }

  AddTableBook(){
    this.userservice.addBooking(this.user, this.restaurantId).subscribe( data =>{
      console.log(data);
      //this.goToRestaurantList();
    },
    error => console.log(error));
  }

  private getFormattedDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  


  mailchecking(){
    this.restaurant = new Restaurant();
    console.log(this.restaurant)
    this.restaurantService.getRestaurantById(this.restaurantId).subscribe( data => {
      this.restaurant = data;
    });
    console.log("to mail details"+this.restaurant);
      this.emailservice.checkEmail(this.user.userEmail, this.restaurant).subscribe(data => {
        console.log(data);
        // this.goToRestaurantList();
      },
      error => console.log(error));
   
  }

  goToRestaurantList(){
    this.router.navigate(['restaurants']);
  }

  onSubmit(){
    this.mailchecking();
    var status = confirm("Table is booked more information check your mail");
    this.user.date = this.formattedDate; // Set the formatted date
    this.userservice.addBooking(this.user, this.restaurantId).subscribe(
      data => {
        console.log(data);
        this.goToRestaurantList();
        // Handle success
      },
      error => {
        console.log(error);
       
        // Handle error
      }
    );
}

}