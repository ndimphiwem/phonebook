import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LandingGuard implements CanActivate {
  constructor(private auth: AuthService, readonly router: Router) { }
  canActivate(): Observable<boolean | UrlTree> | boolean | UrlTree {    
    return this.auth.isAuthenticated$.pipe(
      map((loggedIn: boolean) => {
      if (!loggedIn) {
          return true;
      }
      this.router.navigate(['/phonebooks']);
      return false;
    }));
  }
  
}
