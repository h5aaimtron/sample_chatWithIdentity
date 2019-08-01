import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoginModel } from 'src/app/models/login-model';
import { UserTokenModel } from 'src/app/models/user-token-model';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: LoginModel = new LoginModel();

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginModel).subscribe(
      (token: UserTokenModel) => {
        sessionStorage.setItem("token", JSON.stringify(token));
        this.router.navigate(['/home']);
      },
      (error: HttpErrorResponse) => {
        // TODO: Implement your own error handling or leave it at service level.
        switch (error.status) {
          case 400:
            alert("You need to provide proper credentials.");
            break;

          case 403:
            alert("Invalid username or password");
            break;

          case 404:
            alert("Account not found.");
            break;

          default:
            alert("The service is unavailable at this time.");
            break;
        }

        console.log(error);
      }
    )
  }
}
