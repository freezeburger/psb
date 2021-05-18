import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/core/interfaces/blog-post';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {

  @Input() post : BlogPost | null = null ;

  comments  = false;

}
