import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';
import { map } from 'rxjs/operators';
import { Restaurant } from './restaurant';


@Injectable({
    providedIn: 'root'
  })
  
  export class UserService {
  
    private baseURL = "http://localhost:8081/users";
  
    constructor(private httpClient: HttpClient) { }

getUsersByRestaurantId(restaurantId?: number): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}/bookedUsers/${restaurantId}`);
  }

// addBooking(restaurantId: number):Observable<User>{
//   return this.httpClient.post<User>(`${this.baseURL}/bookTable/${restaurantId}`);
// }

addBooking(user: User, restaurantId?: number): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}/bookTable/${restaurantId}`,user);
}


deleteDataBtnRange(startDate: Date, endDate: Date): Observable<Object>{
 
  return this.httpClient.delete(`${this.baseURL}/delete?fromdate1=${startDate}&todate2=${endDate}`);
}


// deleteRestaurantById(restaurantId: number): Observable<Object>{  //2
//   return this.httpClient.delete(`${this.baseURL}/${restaurantId}`);
// }





}