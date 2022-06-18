import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AdminCredentialsService } from '../Services/admin-credentials.service';

@Injectable({
  providedIn: 'root',
})
export class AuthguardGuard implements CanActivate {
  constructor(
    private _adminCrediential: AdminCredentialsService,
    private _router: Router
  ) {}
  canActivate(): any {
    if (this._adminCrediential.islogin()) {
      return true;
    } else {
      alert('Your Are Not authorised Admin Dashboard');
      this._router.navigate(['home']);
    }
  }
}
