import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public utility: UtilityService) {}
  screen = true;
  text = 'LOGIN WITH CREDENTIALS';

  switch() {
    this.screen = !this.screen;
    this.text = this.screen ? 'LOGIN WITH CREDENTIALS' : 'LOGIN WITH GOOGLE';
  }
}
