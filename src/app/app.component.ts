import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router:Router,
    private useService:UserService
  ){
    useService.auth$.subscribe( auth =>{
      auth && this.router.navigate(['shop'])
    })
  }
}
