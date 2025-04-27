import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';
import { map } from 'rxjs/operators';
import { Restaurant } from './restaurant';
import {Menu} from './menu';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private baseURL = "http://localhost:8081/food";
  
  constructor(private httpClient: HttpClient) { }

  addFoodwithImage(restaurantId: any, menu: Menu, file: File): Observable<any> {

    const formData = new FormData();
    formData.append('file', file, file.name); // Append the file
    formData.append('foodName', menu.foodName);
    formData.append('foodPrice', menu.foodPrice.toString());
    formData.append('foodQuantity', menu.foodQuantity.toString());
    return this.httpClient.post(`${this.baseURL}/addFood/${restaurantId}`,formData);

  }


getMenuForRespectiveRestaurants(restaurantId: number): Observable<Menu[]> {
  return this.httpClient.get<Menu[]>(`${this.baseURL}/viewmenu/${restaurantId}`);
}

deleteAllFoods(): Observable<any> {
  return this.httpClient.delete(`${this.baseURL}/deleteAll`);
}


deleteFoodById(foodId: number): Observable<Object>{  //2
  return this.httpClient.delete(`${this.baseURL}/deletemenu/${foodId}`);
}

getMenuwithimage(foodId: number): Observable<Menu[]> {
  return this.httpClient.get<Menu[]>(`${this.baseURL}/foodWithImage/${foodId}`);
}

  
}
