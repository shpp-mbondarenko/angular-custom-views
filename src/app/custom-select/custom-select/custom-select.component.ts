import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent implements OnInit {

  // Send data to parent component
  @Output() selectedItem: EventEmitter<string> = new EventEmitter<string>();
  @Input() public selectItemsFromParent: Array<any>;
  selectedOption = 'Choose option..';
  isVisibleItems = false;
  constructor() { }

  ngOnInit() {
    console.log('select array data - ' + this.selectItemsFromParent);
  }


  sendSelectedOption(): void {
    this.selectedItem.emit('Selected option is ' + this.selectedOption);
    console.log('clicked');
  }

  showItemsOfCustomSelect() {
    this.toggleVisibilityOfCustomSelectItems();
    console.log(this.selectedOption);
  }

  selectCurrentOption(index) {
    this.toggleVisibilityOfCustomSelectItems();
    console.log('option selected ' + index);
    this.selectedOption = this.selectItemsFromParent[index];
    // send value to parent
    this.sendSelectedOption();
  }

  toggleVisibilityOfCustomSelectItems() {
    this.isVisibleItems = !this.isVisibleItems;
  }
}
