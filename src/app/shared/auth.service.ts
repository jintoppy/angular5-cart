import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  login(loginDetails) {
    if(loginDetails.userid === 'admin' && loginDetails.password === 'welcome') {
      sessionStorage.setItem("userid", "admin");
      return true;
    }
    return false;
  }

  isLoggedIn() {
    const userId = sessionStorage.getItem("userid");
    if(userId) {
      return true;
    }
    return false;
  }

  logout() {

  }

}
