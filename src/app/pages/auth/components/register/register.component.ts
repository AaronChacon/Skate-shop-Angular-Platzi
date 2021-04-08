import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm ()  {
    this.form = this.fb.group({
      email: ['mail@aaronch.com', [Validators.required]],
      password: ['1234567890', [Validators.required]],
    })
  }

  register() {
    if (this.form.valid) {
      const value = this.form.value
      console.log(value);
      this.authService.createUser(value.email, value.password)
          .then(() => {
            this.router.navigate(['auth/login']);
          });
    }

  }

}
