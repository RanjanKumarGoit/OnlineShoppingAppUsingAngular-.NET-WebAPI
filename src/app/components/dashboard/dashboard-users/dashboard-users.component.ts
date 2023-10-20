// dashboard-users.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    country: string;
    state: string;
    city: string;
  };
}

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css']
})

export class DashboardUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log("userData", data)
    });
  }
}
