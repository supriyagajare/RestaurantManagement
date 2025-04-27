import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from './authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Restaurant Management System';
  constructor(  
    public loginService:AuthenticationServiceService,private router: Router) { }

  ngOnInit() {
    this.loginService.logOut();
    this.router.navigate(['login']);
  }

  
}
