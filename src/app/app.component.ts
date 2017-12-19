import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectArrayData = ['Vasya', 'Dima', 'Alkogolik'];

  selectedItemFromChild = 'test';

  receiveDataFromChild(str): void {
    this.selectedItemFromChild = str;
    console.log('in app module ' + str);
  }

}
