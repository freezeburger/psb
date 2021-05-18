import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogPost } from 'src/app/core/interfaces/blog-post';
import { BlogService } from 'src/app/core/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {

  sub$:Subscription;

  posts:BlogPost[] = []

  constructor(
    public blog:BlogService
  ) {
    this.blog.load();

    this.sub$ = blog.blogpost$.subscribe( data =>{
      console.table(data);
      this.posts = data;
    })

   }

  ngOnInit(): void {}

  ngOnDestroy(){
    this.sub$.unsubscribe();
  }

}
