import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseAlertComponent } from './base-alert/base-alert.component';
import { BaseButtonComponent } from './base-button/base-button.component';
import { BaseHeaderComponent } from './base-header/base-header.component';
import { BaseFooterComponent } from './base-footer/base-footer.component';
import { BaseImageComponent } from './base-image/base-image.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BaseAlertComponent,
    BaseButtonComponent,
    BaseHeaderComponent,
    BaseFooterComponent,
    BaseImageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BaseAlertComponent,
    BaseButtonComponent,
    BaseHeaderComponent,
    BaseFooterComponent,
    BaseImageComponent
  ]
})
export class BaseModule { }
