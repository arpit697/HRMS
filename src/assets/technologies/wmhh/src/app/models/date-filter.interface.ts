import { FormControl } from "@angular/forms";

export interface IDate {
  label?: {
    min: string;
    max: string;
  };
  fromDate: FormControl;
  toDate: FormControl;
  maxFromDate?: Date;
  maxToDate?: Date;
  minFromDate?: Date;
  minToDate?: Date;
  todateRequired?: boolean;
  customLabel?: boolean;
}
