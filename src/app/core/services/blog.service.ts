import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogPost } from '../interfaces/blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  blogpost$ = new BehaviorSubject<BlogPost[]>([]);

  constructor(
    private http:HttpClient
  ) { }

  load():void{
    this.http.get<BlogPost[]>(environment.API_BLOG).subscribe( data =>  this.blogpost$.next(data) );
  }

}
