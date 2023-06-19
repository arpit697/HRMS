import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility/utility.service';
import * as fromAuth from '../../../app/states/auth/auth.reducer';
import { Store } from '@ngrx/store';
import { ACCOUNT, FEATURES } from 'src/app/constants/routes';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  animations: [
    trigger('slideDown', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(400),
      ]),
    ]),
  ],
})
export class AccountComponent {
  constructor(public _utility: UtilityService) {}
}
