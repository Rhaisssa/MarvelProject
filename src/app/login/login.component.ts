import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signInData';
import { AuthenticationService } from '../Service/authentication/authentication.service';

@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formValid = false;
  credentialsInvalid = false;

  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit() {}

  onSubmit(signInForm: NgForm) {
    console.log(signInForm.value);

    if (!signInForm.valid) {
      this.formValid = true;
      this.credentialsInvalid = false;
      return;
    }
    this.verifyCredentials(signInForm);
  }

  private verifyCredentials(signInForm: NgForm) {
    const signInData = new SignInData(
      signInForm.value.login,
      signInForm.value.password
    );

    if (!this.authenticationService.authenticate(signInData)) {
      this.formValid = false;
      this.credentialsInvalid = true;
    }
  }
}
