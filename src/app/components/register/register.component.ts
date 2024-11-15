import { Component } from '@angular/core';
import { Router } from '@angular/router'; // For redirecting after successful registration
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SignupRequest } from '../../models/signup-request';
import {AuthService} from '../../service/auth-service/auth-service.component'; // Adjust the import path based on your file structure

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],  // Import necessary modules
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
    role: new FormControl('')
  });

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    // Create the SignupRequest object
    const signupRequest = this.registerForm.value;

    // Call the doRegister method from the AuthService
    this.authService.doRegister(signupRequest).subscribe({
      next: (response) => {
        // Handle successful registration (you can redirect the user to login page, etc.)
        console.log('Registration successful:', response);
      },
      error: (err) => {
        // Handle registration error
        console.error('Registration failed:', err);
      }
    });
  }
}
