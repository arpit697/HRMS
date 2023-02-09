import { Component, OnInit, QueryList, ViewChildren, Input, EventEmitter, Output } from '@angular/core';
import { ICheckboxNested } from 'src/app/models/checkbox-filter.interface';

@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.scss']
})
export class FilterCheckboxComponent implements OnInit {

  @ViewChildren("checkbox") checkBoxes: QueryList<any>;
  checkBoxObj: ICheckboxNested;
  valuePatched = false;

  @Output() _emitSelection = new EventEmitter();

  @Input()
  set checkboxObject(data: ICheckboxNested) {
    if(data){
      this.checkBoxObj = data;
      this.setCheckdata();
    }
  }

  checkList: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

    /**
   * Sets checkdata
   */
  setCheckdata() {
    this.checkList = [];
    this.checkList = [...this.checkList];
    // for (const type of this.checkBoxObj.data) {
    // }

    setTimeout(() => {
      if (this.checkBoxObj.control && this.checkBoxObj.control.value ) {
        this.checkBoxes.toArray().forEach((checkbox) => {

          if (
            this.checkBoxObj.control.value.find(
              (item) => item === checkbox.value
            )
          ) {
            checkbox.checked = true;
          } else {
            checkbox.checked = false;
          }
        });
      } else {
        this.checkBoxes.toArray().forEach((checkbox) => {
          checkbox.checked = false;
        });
      }
      this.valuePatched = true;
    });
  }

  /**
   * Determines whether value change on
   */
  onValueChange() {
    if (!this.valuePatched) {
      return;
    }
    setTimeout(() => {
      const data = this.checkBoxes
        .toArray()
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
      this.checkBoxObj.control.setValue(data.length ? data : null);

      this._emitSelection.emit(true);
    });
  }

}
