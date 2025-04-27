import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';
import { map } from 'rxjs/operators';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseURL = "http://localhost:8081/email/";

  constructor(private httpClient: HttpClient) { }

  checkEmail(mail:string, restaurant:Restaurant):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}?userEmail=${mail}`,restaurant);
  }

}
