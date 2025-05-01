import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AuthenticationServiceService } from '../authentication-service.service'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user: Admin = new Admin('', '', '', new Date(), '', 'ADMIN');

  constructor(private service: AuthenticationServiceService, private router: Router) {}

  saveUser(userName: string, dob: string, email: string, adminPassword: string, repassword: string, about: string) {
    if (adminPassword === repassword) {
      const dobDate = new Date(dob); // Convert DOB string to Date object
      this.user = new Admin(userName, adminPassword, email, dobDate, about, 'ADMIN');
      console.log(this.user);

      this.service.signup(this.user).subscribe(
        response => {
          console.log(response);
          alert('Signup successful!!');
          this.router.navigate(['login']);
        },
        error => {
          console.error(error);
          alert('Signup failed. Please try again.');
        }
      );
      
    } else {
      alert('Password does not match!');
    }
  }
}