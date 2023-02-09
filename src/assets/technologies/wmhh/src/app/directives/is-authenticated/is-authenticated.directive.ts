import {
  Directive,
  HostListener,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { url } from 'inspector';
import { LoginComponent } from 'src/app/modules/account/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { UtilityService } from 'src/app/services/utility.service';
import { DASHBOARD } from 'src/app/constant/routes';

@Directive({
  selector: '[appIsAuthenticated]',
})
export class IsAuthenticatedDirective implements OnInit, OnDestroy {
  @Input() giftInstructions: string;
  clickSubscription: Subscription;
  allowClick = new Subject();
  debounceTime = 200;
  @Output() isAuthenticated = new EventEmitter();

  @Input() id;

  constructor(
    private _utilityService: UtilityService,
    private _dialog: MatDialog,
    private _location: Location,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.clickSubscription = this.allowClick
      .pipe(debounceTime(this.debounceTime))
      .subscribe((e) => this.isAuthenticated.emit(e));
  }

  @HostListener('click', ['$event'])
  clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this._utilityService.getAuthToken()) {
      this.allowClick.next(true);
    } else {
      if (this.giftInstructions && this.giftInstructions.length) {
        this.storeGiftInstructions(this.giftInstructions);
      }
      const dialogRef = this._dialog.open(LoginComponent, {
        // panelClass: 'loginfull',
        // width: '500px',
      });
      dialogRef.afterClosed().subscribe((data) => {
        if (data) {
          if (this._router.url === '/signup') {
            this._router.navigate([DASHBOARD.fullUrl]).then(() => {
              window.location.reload();
            });
          } else{
            if(this.id){
              this._router.navigate([this.id])
            } else{
              window.location.reload();
            }

        }
        }
      });

      // this._router.navigate([`/${LOGIN}`], { queryParams: { redirect: this._location.path() } });
    }
  }

  private storeGiftInstructions(giftInstructions: string): void {
    localStorage.setItem('gift-instructions', giftInstructions);
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    if (this.clickSubscription) {
      this.clickSubscription.unsubscribe();
    }
  }
}
