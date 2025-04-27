import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

  constructor(private http: HttpClient) { }

  addFeedback(restaurantId: number, userID: number, feedback: any) {
    return this.http.post<any>(`/api/add/${restaurantId}/${userID}`, feedback);
  }
  
}
