import { FormControl } from "@angular/forms";

export interface ISearchAutocomplete {
  control?: FormControl;
  url: string;
  viewKey: string;
  valueKey: string;
  placeholder: string;
  selectedValue?: any;
  selectedViewValue?: any;
  prefilledList?: any;
  controlValidator?: any;
  isNavigation?:boolean;
  isPagination?:boolean;
  showError?:boolean;
}
export interface SearchConfig{
  suggestion:boolean,
  searchUrl? :string,
  route? : string,
  placeholder:string,
  searchid? :string,
  isResultMessage?:boolean,
  control: FormControl
}
