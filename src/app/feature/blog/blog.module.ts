import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostCommentComponent } from './blog-post-comment/blog-post-comment.component';



@NgModule({
  declarations: [
    BlogComponent,
    BlogPostComponent,
    BlogPostCommentComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BlogComponent
  ]
})
export class BlogModule { }
