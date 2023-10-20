import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    let res = false;
    this.authService.myProfile().subscribe(
      (data) => {
          res = true
      },
      (error) => {
        this.router.navigate(['/login'])
        res = false
      }
    )
    return res;
  }
}
