import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '../feature/feature.module';
import { SharedModule } from '../shared/shared.module';
import { PageTypeComponent } from './page-type/page-type.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageShopComponent } from './page-shop/page-shop.component';
import { PageBlogComponent } from './page-blog/page-blog.component';
import { PagePollComponent } from './page-poll/page-poll.component';

@NgModule({
  declarations: [
    PageTypeComponent,
    PageLoginComponent,
    PageShopComponent,
    PageBlogComponent,
    PagePollComponent
  ],
  imports: [
    CommonModule,
    FeatureModule,
    SharedModule
  ],
  exports: [
    PageLoginComponent,
    PageShopComponent,
    PageBlogComponent,
    PagePollComponent
  ]
})
export class PageModule { }
