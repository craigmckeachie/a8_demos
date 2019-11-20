import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="loginForm" (submit)="onSubmit()">
      <input
        [formControl]="loginForm.get('username')"
        type="text"
        name="username"
        placeholder="username"
      /><br />
      <div
        *ngIf="
          loginForm.get('username').dirty &&
          loginForm.get('username').invalid &&
          loginForm.get('username').touched
        "
      >
        <div *ngIf="loginForm.get('username').hasError('required')">
          Username is required.
        </div>
        <div *ngIf="loginForm.get('username').hasError('minlength')">
          Username should be longer.
        </div>
      </div>
      <br />
      <input
        formControlName="password"
        type="password"
        name="password"
        placeholder="password"
      /><br />
      <button>Sign In</button>
    </form>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: [null, [Validators.required, Validators.minLength(3)]],
        password: []
      },
      { updateOn: 'blur' }
    );
    // this.loginForm = new FormGroup(
    //   {
    //     username: new FormControl(null, [
    //       Validators.required,
    //       Validators.minLength(3)
    //     ]),
    //     password: new FormControl()
    //   },
    //   { updateOn: 'blur' }
    // );
  }

  onSubmit() {
    throw new Error('fail');
    console.log(this.loginForm.value);
  }
}
