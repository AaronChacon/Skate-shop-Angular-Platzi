import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event, Router } from '@angular/router';

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
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm ()  {
    this.form = this.fb.group({
      name: ['Aaron Chacon', [Validators.required]],
      email: ['mail@aaronch.com', [Validators.required]],
      password: ['1234567890', [Validators.required]],
    })
  }

  saveLogin() {
    console.log(this.form.value);
  }

}
