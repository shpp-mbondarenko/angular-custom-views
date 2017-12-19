import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSelectComponent } from './custom-select/custom-select.component';
// of ngModel
import { FormsModule } from '@angular/forms';
// for animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule, FormsModule, BrowserAnimationsModule
  ],
  declarations: [CustomSelectComponent],
  exports: [CustomSelectComponent]
})
export class CustomSelectModule { }
