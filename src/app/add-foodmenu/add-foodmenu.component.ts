import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-add-foodmenu',
  templateUrl: './add-foodmenu.component.html',
  styleUrls: ['./add-foodmenu.component.css']
})
export class AddFoodmenuComponent implements OnInit{

  foodId: number=0;
  restaurantId: number=0;
  restaurant: Restaurant = new Restaurant();
  foodName = '';
  foodPrice = 0;
  foodQuantity = 0;
  imageData: File | null = null;
  menuList : Menu[] = [];


  menu:Menu=new Menu();

  constructor(private restaurantService: RestaurantService,
    private menuService: MenuService,private route: ActivatedRoute,private router: Router) {}

    ngOnInit(): void {
  
      this.restaurantId = this.route.snapshot.params['restaurantId'];
      console.log(this.restaurantId);

      this.restaurantService.getRestaurantById(this.restaurantId).subscribe(data => {
        this.restaurant = data;
      }, error => console.log(error));

    }

    selectedFile: File | null = null; // Property to store the selected file

    handleFileInput(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.files && inputElement.files.length > 0) {
        this.selectedFile = inputElement.files[0];
      } else {
        this.selectedFile = null;
      }
    }


    addFoodMenu(restaurantId: number) {
      if (this.selectedFile !== null) { // Use selectedFile, not imageData
        const fileName = 'example.jpg'; 
        const lastModified = Date.now(); 
    
        const file = new File([this.selectedFile], fileName, { lastModified });
        
        this.menuService.addFoodwithImage(restaurantId, this.menu, file).subscribe(
          data => {
            console.log(data);
            this.goToRestaurantList();
            // this.goToRestaurantList();
          
          },
          error => console.log(error)
        );
      } else {
        console.error("No image selected");
      }
    }
    
    goToRestaurantList(){
      this.router.navigate(['restaurants']);
    }
   

  //data:image/png;base64

  // handleFileInput(event: Event) {
  //   this.target = event.target as HTMLInputElement;
  //   this.files = this.target.files as FileList;
  //   //console.log(this.files);
    
  // }

  onSubmit(){
    console.log(this.menu);

  
    var status = confirm("Your Food Item Successfully Added in Restaurant FoodMenu");
    if (this.restaurant.restaurantId!==0) {
      this.addFoodMenu(this.restaurantId);

    } else {
      console.log('restaurantId is null, cannot make API request.');
    }
    //this.addFoodMenu();
    
  }

}
