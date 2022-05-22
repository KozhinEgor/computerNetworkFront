import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api";
import {first} from "rxjs";

@Component({
  selector: 'app-page-auth',
  templateUrl: './page-auth.component.html',
  styleUrls: ['./page-auth.component.css']
})
export class PageAuthComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {
    // redirect to home if already logged in

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {

  }
  getErrorMessage() {
    if (this.loginForm.value.username.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.value.username.hasError('email') ? 'Not a valid email' : '';
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.error = '';
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.api.login({email: this.f['username'].value})
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate(['/home']);
        },
        error: error => {

          this.error = "Не вырный логин или пароль";
          this.loading = false;
        }
      });
  }

}
