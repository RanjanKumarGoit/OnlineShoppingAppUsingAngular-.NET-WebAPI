import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { setProfileData } from './action/profile.actions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ecomm';
  constructor(private authService: AuthService, private router: Router, private store: Store){
    this.authService.myProfile().subscribe(
      (data) => {
        this.store.dispatch(setProfileData({ profileData: data, isAdmin: data.role ==="admin", isLoggedIn: true }));
        console.log(this.store)
      }
    )
  }

  ngOnInit(): void {
    this.authService.myProfile().subscribe(
      (data) => {
        this.store.dispatch(setProfileData({ profileData: data, isAdmin: data.role ==="admin", isLoggedIn: true }));
        console.log(this.store)
      }
    )
  }
}
