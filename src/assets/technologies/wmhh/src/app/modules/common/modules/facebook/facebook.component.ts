import { Component, OnInit, Output, EventEmitter } from "@angular/core";
// import { SIGNUP_TYPE } from "src/app/constants/enums";
import { environment } from "src/environments/environment";

declare var FB: any;
@Component({
  selector: "app-facebook",
  templateUrl: "./facebook.component.html",
  styleUrls: ["./facebook.component.scss"]
})
export class FacebookComponent implements OnInit {
  @Output() facebookLogin = new EventEmitter();
  facebookData: any = {};
  constructor() {}

  ngOnInit() {
    (function(d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId: environment.facebookKey, // CLient Accoutn Id
        cookie: true,
        xfbml: true,
        version    : 'v9.0',
      });
      FB.AppEvents.logPageView();
    };
  }

  fbLogin() {
    FB.login(response => {
      const self = this;
      if (response.authResponse) {
        self.facebookData["token"] = response.authResponse.accessToken;
        FB.api("/me?fields=id,name,email,gender,picture,age_range", function(res)
        {
          self.facebookData.name = res.name;
          self.facebookData.email = res.email;
          self.facebookData.id=res.id
          self.facebookData.image=res.picture.data.url || res.picture || ''
          self.emitUserData();
        });
      } else {
        // console.log('User login failed');
      }
    });
  }

  emitUserData() {
    this.facebookLogin.emit(this.facebookData);
  }
}
