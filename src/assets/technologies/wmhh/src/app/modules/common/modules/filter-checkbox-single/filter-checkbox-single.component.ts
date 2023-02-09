import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  EventEmitter,
  Output,
  Input,
} from "@angular/core";
import { ICheckboxNested } from "src/app/models/checkbox-filter.interface";
import { MatCheckboxChange } from "@angular/material/checkbox";

@Component({
  selector: "app-filter-checkbox-single",
  templateUrl: "./filter-checkbox-single.component.html",
  styleUrls: ["./filter-checkbox-single.component.scss"],
})
export class FilterCheckboxSingleComponent implements OnInit {
  @ViewChildren("checkbox") checkBoxes: QueryList<any>;
  checkBoxObj: ICheckboxNested;
  valuePatched = false;

  @Output() _emitSelection = new EventEmitter();

  @Input()
  set checkboxObject(data: ICheckboxNested) {
    if (data) {
      this.checkBoxObj = data;
      this.setCheckdata();
    }
  }

  checkList: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  /**
   * Sets checkdata
   */
  setCheckdata() {
    this.checkList = [];
    this.checkList = [...this.checkList];
    // for (const type of this.checkBoxObj.data) {
    // }

    setTimeout(() => {
      if (this.checkBoxObj.control && this.checkBoxObj.control.value) {
        this.checkBoxes.toArray().forEach((checkbox) => {
          if (this.checkBoxObj.control.value == checkbox.value) {
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
  onValueChange(event: MatCheckboxChange) {
    if (!this.valuePatched) {
      return;
    }
    this.checkBoxes.toArray().forEach((checkbox) => {
      if (checkbox.value != event.source.value) {
        checkbox.checked = false;
      }
    });

    setTimeout(() => {
      this.checkBoxObj.control.setValue(
        event.checked ? event.source.value : ""
      );
      this._emitSelection.emit(true);
    });
  }

  handleKeydown(event) {
    console.log(event);

    if (event.keyCode == 13) {
      console.log("came");
    }
  }
}
