import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
    let isLoggedIn=next.queryParams.isLoggedIn
    if (isLoggedIn===true)
    return true;
    if (isLoggedIn===false)
    return this.route.navigate(['/home']);
  }

  constructor(private route: Router) {

  }

}
