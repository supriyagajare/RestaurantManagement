import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';
import { map } from 'rxjs/operators';
import { Restaurant } from './restaurant';
import {Menu} from './menu';
import { OrderDetails } from './orderdetails';

@Injectable({
  providedIn: 'root'
})
export class FoodOrderServiceService {

  private baseURL = "http://localhost:8081/order";

  constructor(private httpClient: HttpClient) { }

  createOrder(orderDetails: OrderDetails): Observable<OrderDetails> {
    return this.httpClient.post<OrderDetails>(`${this.baseURL}/orderFood`, orderDetails);
  }


  getOrderDetails(userID: number): Observable<OrderDetails[]> {
    return this.httpClient.get<OrderDetails[]>(`${this.baseURL}/user/details/${userID}`);
  }

  deleteAllRestaurants(): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/deleteAllUsers`);
  }

  deleteOrderById(orderId: number): Observable<Object>{  //2
    return this.httpClient.delete(`${this.baseURL}/${orderId}`);
  }
}
