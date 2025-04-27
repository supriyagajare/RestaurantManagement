import { Component,OnInit} from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { User } from '../user';
import { UserService} from '../user.service';


@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit{

  restaurantId: number=0;
  restaurant: Restaurant = new Restaurant();
  foodName = '';
  foodPrice = 0;
  foodQuantity = 0;
  imageData: File | null = null;
  menuList : Menu[] = [];
  restaurants: Restaurant[] = [];
  selectedUserIds: number[] = [];
  
  selectedUserId: number | null = null;
  
  users: User[] = []; 

  menu:Menu=new Menu();
 
  

  constructor(private restaurantService: RestaurantService,
    private menuService: MenuService,private route: ActivatedRoute,
    private userService: UserService,
    private router: Router) {}


    addMenu(restaurantId?:number){
      var status = confirm("Are you sure to Add the records?");
      if (status == true) {
        this.router.navigate(['add-menu',restaurantId]);
        }
      
      else{
      console.log("Error in booking")
    }
    }


    deleteFoodById(foodId: number){
      var status = confirm("Are you sure to delete this record?");
      if (status == true) {
      this.menuService.deleteFoodById(foodId).subscribe( data => {
        console.log(data);
        this.getRestaurants();
      }
      )
    }
    else{
      this.getRestaurants();
    }
    }

    removeAllFoods() : void{
      var status = confirm("Are you sure to delete all the records?");
      if (status == true) {
        this.menuService.deleteAllFoods().subscribe(details => {
          console.log(details);
          this.getRestaurants();
        },
          error => {
            console.log(error);
          })
      }
      else{
      this.getRestaurants();
    }
    }

    private getRestaurants(){
      this.restaurantService.getRestaurantList().subscribe(data => {
        this.restaurants = data;
  
     });
    }

    // orderFood(){
    //   var status = confirm("Are you sure to Add the records?");
    //   if (status == true) {
    //     this.router.navigate(['food-order']);
    //     }
      
    //   else{
    //   console.log("Error in booking")
    // }
    // }
  

  ngOnInit(): void {

    this.initSelectedUserIds();
  
    this.restaurantId = this.route.snapshot.params['restaurantId'];

    this.loadUsers(this.restaurantId); 

    this.menuService.getMenuForRespectiveRestaurants(this.restaurantId).subscribe(
      data => {
        
        console.log(data);  //all the attributes of menu class
        this.menuList = data;

      },
      error => console.log(error)
    );

  }


  loadUsers(restaurantId:number) {
    this.userService.getUsersByRestaurantId(restaurantId).subscribe(data => {
      this.users = data;
    });
  }

  initSelectedUserIds() {
    this.selectedUserIds = new Array(this.menuList.length).fill(null);
  }


  
  orderFood(index: number, selectedUserId: number | null) {
    if (selectedUserId !== null) {
      var status = confirm("Are you sure to add the records?");
      if (status === true) {
        this.router.navigate(['food-order'], {
          queryParams: { userId: selectedUserId, foodId: this.menuList[index].foodId }
        });
      } else {
        console.log("Error in booking");
      }
    } else {
      // Show an error or alert indicating that no user is selected for this item
    }
  }


  


  // FoodOrder(restaurantId?:number){
  //   var status = confirm("Are you sure to Add the records?");
  //   if (status == true) {
  //     this.router.navigate(['add-menu',restaurantId]);
  //     }
    
  //   else{
  //   console.log("Error in booking")
  // }
  // }



  // ngOnInit(): void {
  
  //   this.restaurantId = this.route.snapshot.params['restaurantId'];
  //   this.menuService.getMenuForRespectiveRestaurants(this.restaurantId).subscribe(
  //     data => {
  //       console.log(data);
  //       this.menuList = data.map(menuItem => {
  //         return {
  //           ...menuItem,
  //           imageUrl: this.getImageUrl(menuItem.imageData)
  //         };
  //       });
  //     },
  //     error => console.log(error)
  //   );
  // }

  // getImageUrl(file: File | null): string {
  //   if (file) {
  //     // Create a URL for the File object
  //     return URL.createObjectURL(file);
  //   } else {
  //     return ''; // Return an empty string if file is null
  //   }

  // addFoodMenu() {
  //   this.restaurant = new Restaurant();
  //   if (this.menu.imageData !== null) {
  //     const fileName = 'example.jpg'; 
  //     const lastModified = Date.now(); 
  
  //     const file = new File([this.menu.imageData], fileName, { lastModified });
  //     console.log(this.restaurant.restaurantId);
  //     this.menuService.addFoodwithImage(this.restaurant.restaurantId, this.menu, file).subscribe(
  //       data => {
          
  //         console.log(data);
  //         // this.goToRestaurantList();
  //       },
  //       error => console.log(error)
  //     );
  //   } else {
  //     console.error("No image selected");
  //   }
  // }
  
  
  // onImageChange(event: any) {
  //   this.menu.imageData = event.target.files[0];
  // }


  // onSubmit(){
  //   console.log(this.menu);
  //   if (this.restaurant.restaurantId!==0) {
  //     this.addFoodMenu();

  //   } else {
  //     console.log('restaurantId is null, cannot make API request.');
  //   }
  //   this.addFoodMenu();
  // }

}
