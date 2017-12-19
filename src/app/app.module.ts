import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomSelectModule } from './custom-select/custom-select.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
