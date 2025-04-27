import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';
  invalidLogin = false

  // constructor(private router: Router,
  //   private loginservice: AuthenticationServiceService) { }

  // checkLogin() {
  //   if (this.loginservice.authenticate(this.username, this.password)  //
  //   ) {
  //     this.router.navigate(['restaurants']);
  //     console.log("navigate..");
  //     this.invalidLogin = false;
  //   } else
  //     this.invalidLogin = true;
  // }



  

  loginStatus:any=localStorage.getItem("loginStatus");

  constructor(private service:AuthenticationServiceService, private router:Router)
  {
    if(this.loginStatus=="active")
    {
      this.router.navigate(['restaurants']);
    }
  }



  signin(email:any, password:any)
  {
   console.log(email+" "+password)
    this.service.signin(email,password).subscribe(

      response => {

        console.log(response);
        alert('login successful');
        localStorage.setItem("loginStatus","active");
        // localStorage.setItem("email",email);
        // localStorage.setItem("userId",response.userId);
        // localStorage.setItem("userRole",response.userRole);
        // localStorage.setItem("userName",response.userName);
         this.router.navigate(['restaurants']);
    },

    () => { alert('Wrong email Id or password!!');  }

    );



  }


  signUp()
  {
    this.router.navigate(['signup']);
  }

  
}
