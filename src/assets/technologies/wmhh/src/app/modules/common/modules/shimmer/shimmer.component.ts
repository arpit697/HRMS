import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-shimmer",
  templateUrl: "./shimmer.component.html",
  styleUrls: ["./shimmer.component.scss"],
})
export class ShimmerComponent implements OnInit {
  @Input() type: string = "";
  constructor() {}

  ngOnInit(): void {}
}
