import { Injectable } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { SOCIAL_LOGIN, USER_SOCIAL_REGITERATION } from "src/app/constant/urls";

function _window(): any {
  // return the global native browser window object
  return window;
}
@Injectable()
export class SocialLoginService {

  constructor(private http: HttpService) {}

  get nativeWindow(): any {return _window()}
  get gapi(){return this.nativeWindow.gapi}

  socialLogin(body) {
    return this.http.post(USER_SOCIAL_REGITERATION, body);
  }

  googleLogout(){
    if(this.gapi['auth2']){
      const auth2 = this.gapi.auth2.getAuthInstance();
      auth2.signOut().then(()=> {
        // console.log('User signed out. googleLogout');
      })
    }
  }

  socialLogout(){
    try {
      this.googleLogout();
    } catch (error) {
      // console.log(error);
    }
  }
}
