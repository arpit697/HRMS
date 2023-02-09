import { FormControl } from "@angular/forms";
/**
 * contains checkbox interface
 */
export interface ICheckbox {
  control: FormControl;
  label: string;
  data: any[];
  viewKey: string;
  valueKey: string;
}

export interface ICheckboxNested {
  control: FormControl;
  label: string;
  data: any[];
  viewKey: string;
  valueKey: string;
  child?: {
    viewKey: string;
    valueKey: string;
    control?: FormControl;
  };
  typeSelected?: boolean;
}
