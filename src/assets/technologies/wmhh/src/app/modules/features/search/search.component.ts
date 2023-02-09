import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PAGE_OPTIONS } from "src/app/constant/app-constant";
import { SearchService } from "./search.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
