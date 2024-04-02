import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage2Component } from './pages/main-page2.component';

@NgModule({
  declarations: [
    MainPage2Component
  ],
  exports: [
    MainPage2Component
  ],
  imports: [
    CommonModule
  ]
})
export class EsdlaModule { }
