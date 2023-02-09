import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
import { HttpService } from "src/app/services/http.service";
import { Router } from "@angular/router";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { SearchConfig } from "src/app/models/search-autocomplete.interface";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit {
  value;
  searchconfig;
  @Input() set searchconfigSet(value) {
    this.searchconfig = value;
    console.log(value);
    if (value.control.value) {
      this.searchControl.setValue(value.control.value, { emitEvent: false });
    }
  }
  isSearchFinished: boolean = false;

  @Output() keyEventFired: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchEventFired: EventEmitter<any> = new EventEmitter<any>();
  searchControl = new FormControl();
  previousSearch: string = "";
  // value = '';
  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {
    this.keyEntered();
  }

  searchItem(value) {
    this.searchEventFired.emit(value);
  }

  keyEntered() {
    this.searchControl.valueChanges
      .pipe(debounceTime(700), distinctUntilChanged())
      .subscribe((data) => {
        console.log(data);
        console.log(this.previousSearch);

        this.isSearchFinished = false;
        if (this.previousSearch === "") {
          this.previousSearch = this.searchControl.value.trim();
        }
        if (this.previousSearch !== "") {
          this.keyEventFired.emit(this.searchControl.value.trim());
          console.log(this.searchControl.value.trim());

          if (this.searchControl.value.trim() === "") {
            this.previousSearch = "";
          }
        } else {
          console.log("cane111");

          //emit empty search event
          this.keyEventFired.emit(this.searchControl.value.trim());
        }
      });
  }
  clearSearch() {
    this.keyEventFired.emit(this.searchControl.value.trim());
    this.searchControl.setValue("");
  }
}
