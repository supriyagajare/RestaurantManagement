import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private baseURL = "http://localhost:8081/api/v1/restaurant";

  constructor(private httpClient: HttpClient) { }

    
  getAllRestaurants(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}`);
  }

  getRestaurantList(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}`);
  }


  findByRestaurantName(restaurantName:any):Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}?name=${restaurantName}`);
  }

  saveRestaurant(restaurant: Restaurant): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, restaurant);
  }

  getRestaurantById(restaurantId: number): Observable<Restaurant>{
    return this.httpClient.get<Restaurant>(`${this.baseURL}/${restaurantId}`);
  }

  updateRestDetailsById(restaurantId: number, restaurant: Restaurant): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${restaurantId}`, restaurant);
  }

  deleteRestaurantById(restaurantId: number): Observable<Object>{  //2
    return this.httpClient.delete(`${this.baseURL}/${restaurantId}`);
  }

  deleteAllRestaurants(): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}`);
  }

  findByVegDomain(): Observable<Restaurant[]> {
    console.log("i ca,e here");
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}/vegRestaurant`);
  }

  findByNonVegDomain(): Observable<Restaurant[]> {
    console.log("i ca,e to non Veg here");
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}/nonVegRestaurant`);
}

//searchByPlc
findByLocation(loc : string) :Observable<Restaurant[]>{
  console.log(loc);  return this.httpClient.get<Restaurant[]>(`${this.baseURL}/searchByLocation?location=${loc}`); 
}

sortByRatings(pathVar : string,fieldName : string): Observable<Restaurant[]> {
  return this.httpClient.get<Restaurant[]>(`${this.baseURL}/filter/Ratings/${pathVar}?ratings=${fieldName}`); 
 }


sortByCost(pathVar : string, fieldName : string): Observable<Restaurant[]> {
  return this.httpClient.get<Restaurant[]>(`${this.baseURL}/filter/Price/${pathVar}?price=${fieldName}`); 
}



}

