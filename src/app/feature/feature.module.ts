import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { AccountModule } from './account/account.module';
import { PollModule } from './poll/poll.module';
import { BlogModule } from './blog/blog.module';
import { ShopModule } from './shop/shop.module';



@NgModule({
  exports: [
    LoginModule,
    AccountModule,
    PollModule,
    BlogModule,
    ShopModule
  ]
})
export class FeatureModule { }
