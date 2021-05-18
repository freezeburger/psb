import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountComponent } from './account/account.component';



@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AccountComponent
  ]
})
export class AccountModule { }
