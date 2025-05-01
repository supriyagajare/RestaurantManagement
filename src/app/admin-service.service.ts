import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // ✅ Import HttpClient
import { Observable } from 'rxjs';
import { Admin } from './admin'; // ✅ Import Admin model (create one if not created)

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private baseURL = "http://localhost:8081/admins"; // ✅ Correct URL, correct port

  constructor(private httpClient: HttpClient) { } // ✅ Properly inject HttpClient

  // Method to signup admin
  signupAdmin(admin: Admin): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/signup`, admin); // ✅ Full working POST request
  }

}