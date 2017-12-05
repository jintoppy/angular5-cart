import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanDeactivate<boolean> {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }

constructor(
  private auth: AuthService,
  private router: Router
) {

}

canDeactivate() {
  return true;
}

canActivate(activatedRoute, routerState) {
  if(this.auth.isLoggedIn()){
    return true;
  }
  this.router.navigate(['/login']);
  return false;
}

}
