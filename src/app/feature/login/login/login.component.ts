import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  credentials: Omit<User, 'id'> = {
    email: '',
    password: ''
  };
  type: 'password' | 'text' = 'password';
  mode: 'login' | 'register' = 'login';

  constructor(
    public userService: UserService
  ) { }

  login(){
    console.log('login')
  }
  register(){
    // console.log('register')
    this.userService.register(this.credentials);
  }


}
