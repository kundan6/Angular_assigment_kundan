import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private myRoute: Router,private toastr: ToastrService){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.isLoggedIn()){
      return true;
    }else{
      this.myRoute.navigate(["/SignIn"]);
      this.toastr.error('dashboard would only be accessible to logged-in users');
      return false;
    }
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }
  getToken() {
    return localStorage.getItem("_userInfo");
  }
}
