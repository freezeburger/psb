import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBlogComponent } from './page/page-blog/page-blog.component';
import { PageLoginComponent } from './page/page-login/page-login.component';
import { PagePollComponent } from './page/page-poll/page-poll.component';
import { PageShopComponent } from './page/page-shop/page-shop.component';

/*
login
shop
blog
poll
*/

const routes: Routes = [
  {
    path:'login',
    component:PageLoginComponent
  },
  {
    path:'shop',
    component:PageShopComponent
  },
  {
    path:'blog',
    component:PageBlogComponent
  },
  {
    path:'poll',
    component:PagePollComponent
  },
  {
    path:'**',
    redirectTo:'login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
