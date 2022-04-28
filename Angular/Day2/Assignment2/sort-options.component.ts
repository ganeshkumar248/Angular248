import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort-options',
  templateUrl: './sort-options.component.html',
  styleUrls: ['./sort-options.component.css']
})
export class SortOptionsComponent {

  @Output()
  onColNameChange:EventEmitter<string> = new EventEmitter();

  strName:string  = "empName";

  name_change()
  {
    this.onColNameChange.emit(this.strName);
  }
}
