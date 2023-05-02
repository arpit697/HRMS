import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentChecked {
  title = 'HRMS_Appinventiv';
  constructor(private cdr: ChangeDetectorRef) {}
  
  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }
}
