import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/model/profile';
import { logout } from 'src/app/action/profile.actions';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  profileData$: Observable<any>;
  isLoggedIn: boolean = localStorage.getItem('token') ? true : false;
  isAdmin: boolean = false;
  constructor(private store: Store<any>, private router: Router, private toastr: ToastrService) { 
    this.profileData$ = this.store;
  }

  ngOnInit() {
    // You can subscribe to profileData$ here if you want to perform actions when the data changes
    this.profileData$.subscribe(profileData => {
      this.isLoggedIn = profileData.profile.isLoggedIn;
      this.isAdmin = profileData.profile.isAdmin;
    },
      error => {
        this.isLoggedIn = false;
        this.isAdmin = false;
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.store.dispatch(logout());
    this.toastr.success("Logout Successful");
    this.router.navigate(['/']);
  }
}
