import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showError = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { 

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.showError = false;
      const isSuccess = this.auth.login(this.loginForm.value);
      if(isSuccess) {
        this.router.navigate(['/']);
      }
      else {
        this.showError = true;
      }
    }
  }

}
