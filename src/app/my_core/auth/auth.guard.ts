import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router : Router,private authService : AuthenticationService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      console.log(next.data);
      console.log(next.root.children);
      
      console.log('ActivateGuard#canActivate called, can: ');
      // if(state.url == '/home') return true;
      if (localStorage.getItem('access_token') != null)
      {
        //Kiem tra user dang nhap co giong trong cau hinh router data: { roles: ['Admin'] }
        let roles = next.data["roles"] as Array<string>;
        console.log("roles: " + JSON.stringify(roles));
        if (roles) {
          var match = this.authService.roleMatch(roles);
          if (match) return true;
          else {
            this.router.navigateByUrl('/error/403');
            return false;
          }
        }
        else
          return true;
      }
      this.router.navigateByUrl('/auth/login');
      return false;
  }
}
