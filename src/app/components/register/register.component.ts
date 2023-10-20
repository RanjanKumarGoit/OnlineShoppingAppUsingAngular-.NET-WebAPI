import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private toastr: ToastrService ,private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const payload = {
        name: this.registrationForm.value.name,
        email: this.registrationForm.value.email,
        role: "customer",
        password: this.registrationForm.value.password,
        phone: this.registrationForm.value.phone,
        address: {
          country: this.registrationForm.value.country,
          state: this.registrationForm.value.state,
          city: this.registrationForm.value.city
        }
      }
      this.authService.register(payload).subscribe(
        (data) => {
          console.log(data)
          this.toastr.success("Registration Successful");
          this.router.navigate(['/login']);
        },
        (error) => {
          console.log(error)
        }
      );
      console.log(payload)
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}
