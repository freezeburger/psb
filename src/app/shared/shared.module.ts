import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../base/base.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BaseModule
  ]
})
export class SharedModule { }
