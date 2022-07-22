import { Injectable } from '@angular/core';
import { SignInData } from 'src/app/model/signInData';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockUser: SignInData = new SignInData('user', 'test');
  authenticated = false;

  constructor(private router: Router) { }

    authenticate(signInData: SignInData): boolean {
    if (this.verifyCredentials(signInData)) {
      this.authenticated = true;
      this.router.navigate(['home']);
      return true;
    }
    this.authenticated = false;
    return false;
  }

  private verifyCredentials(signInData: SignInData): boolean {
    return this.verifyLogin(signInData.getLogin()) && this.verifyPassword(signInData.getPassword());
  }

  private verifyLogin(login: string): boolean {
    return login === this.mockUser.getLogin();
  }

  private verifyPassword(password: string): boolean {
    return password === this.mockUser.getPassword();
  }

  logout() {
    this.authenticated = false;
    this.router.navigate(['']);
  }

  getIsAuthenticated(): boolean {
    return this.authenticated;
  }
}
