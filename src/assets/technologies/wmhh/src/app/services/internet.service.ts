import { Injectable } from "@angular/core";
import { Observable, merge, of, fromEvent } from "rxjs";
import { mapTo } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class InternetService {
  online$: Observable<boolean>;

  constructor() {
    this.online$ = merge(
      of(navigator.onLine),
      fromEvent(window, "online").pipe(mapTo(true)),
      fromEvent(window, "offline").pipe(mapTo(false))
    );
  }
}
