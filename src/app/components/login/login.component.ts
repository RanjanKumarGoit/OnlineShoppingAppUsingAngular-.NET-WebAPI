import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { setProfileData } from 'src/app/action/profile.actions';
import { Profile } from 'src/app/model/profile';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/model/appstate';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  passwordErrorMessage: string = '';

  constructor(private toastr: ToastrService, private fb: FormBuilder, private authService: AuthService, private router: Router, private store: Store) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      this.authService.login(credentials).subscribe(
        (data) => {
          console.log(data)
          localStorage.setItem('token', data.token);
          this.authService.myProfile().subscribe(
            (data) => {
              this.store.dispatch(setProfileData({ profileData: data, isAdmin: data.role ==="admin", isLoggedIn: true }));
              console.log(this.store)
              this.toastr.success("Login Successful");
              if(data.role === "admin"){
                this.router.navigate(['/dashboard']);
              }
            }
          )
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
          this.passwordErrorMessage = error.error.message
        }
      );
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
