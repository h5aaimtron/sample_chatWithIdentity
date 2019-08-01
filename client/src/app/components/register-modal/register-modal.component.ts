import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterModel } from 'src/app/models/register-model';
import { HttpErrorResponse } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent implements OnInit {
  registerModel: RegisterModel = new RegisterModel();
  errorMessage: string = "";

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  /**
   * Register an account.
   */
  register() {
    this.errorMessage = "";
    this.authService.register(this.registerModel).subscribe(
      () => {
        // Close the register modal.
        $('#registerModal').modal('hide');
      },
      (error: HttpErrorResponse) => {
        switch(error.status) {
          case 400:
            alert("The provided information does not meet th eminimum rquirements to create an account.");
            break;

          default:
            alert("The service is unavilable at this time.");
            break;
        }
      }
    )
  }
}
