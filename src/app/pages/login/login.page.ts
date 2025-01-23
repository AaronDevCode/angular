import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }

  ngOnInit() {
  }

  login() {
    if(this.email === 'admin' && this.password === 'admin'){
      console.log('Login correcto');
    } else { 
      console.log('Login incorrecto');
    }
  }
}