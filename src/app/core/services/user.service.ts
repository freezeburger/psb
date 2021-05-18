import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  auth$ = new BehaviorSubject<User | null>(null);

  constructor(
    private http:HttpClient
  ) { }

  login(credentials:Omit<User, 'id'>){}

  register(credentials:Omit<User, 'id'>){
     console.log('register', credentials );
  }

}
