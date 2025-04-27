import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private baseURL = "http://localhost:8081/admins";
  httpClient: any;

  constructor() { }

  
  
}
