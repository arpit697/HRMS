import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective {


  clickSubscription: Subscription;
  allowClick = new Subject();
  debounceTime = 200;

  @Output() _allowClick = new EventEmitter();

  constructor() { }



  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.clickSubscription = this.allowClick
      .pipe(debounceTime(this.debounceTime))
      .subscribe((e) => this._allowClick.emit(e));
  }


  @HostListener('click', ['$event'])
  clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    this.allowClick.next(true);
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    if (this.clickSubscription) {
      this.clickSubscription.unsubscribe();
    }
  }
}
