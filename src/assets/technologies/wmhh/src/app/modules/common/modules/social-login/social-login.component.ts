import { Component, OnInit, Output, EventEmitter, NgZone, OnDestroy } from '@angular/core';
import { HttpService } from '../../../../services/http.service';
import { SOCIAL_LOGIN, LINKEDIN_AUTH } from '../../../../constant/urls';
import { UtilityService } from '../../../../services/utility.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HOME, COMPLETE_PROFILE, PROFILE_CREATE } from '../../../../constant/routes';
import { SOCIAL_TYPE, SOCIAL_REGISTRATION_TYPE } from 'src/app/constant/enums';
import { SocialLoginService } from './services/social-login.service';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { AccountService } from 'src/app/modules/account/account.service';
import { environment } from 'src/environments/environment';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

declare var FB: any;
@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss'],
})
export class SocialLoginComponent implements OnInit, OnDestroy {
  // @Output() facebookLoginEvent = new EventEmitter();

  randomState;
  accessCode;
  // redirectUrl = environment.domain;
  // linkedInKey = environment.linkedinKey;
  // appleRedirectUrl = `${environment.url}user/appleAuth`;
  eventListener:any;
  constructor(
    private utility: UtilityService,
    private router: Router,
    private socialService: SocialLoginService,
    private profileService: UserProfileService,
    private ngZone: NgZone,
    private accountService: AccountService,
    private route: ActivatedRoute,
    private http: HttpService,
    private gaService: GoogleAnalyticsService
  ) {
  }

  ngOnInit(): void {
    this.getRandomState();
  }

  
  facebookLogin(userData) {
    this.gaService.event('FACEBOOK_LOGIN_TAPPED', {});
    const addressData = (JSON.parse(this.utility.getUserAddress()));    
    if(addressData.address['subLocality']){delete addressData.address['subLocality']}
    if(addressData.address['locality']){delete addressData.address['locality']}
    const data = {
      socialId: userData.id,
      fullName: userData.name,
      email: userData.email || "",
      profilePicture: userData.image||"",
    }
    const body = {...data,...addressData, regType:SOCIAL_REGISTRATION_TYPE.REG_FB}
    console.log(body, "from facebook Login");
    this.socialLogin(body);
  }
 
  googleLogin(userData){
    console.log(userData, "userData");
    this.gaService.event('GOOGLE_LOGIN_TAPPED', {});
    const addressData = (JSON.parse(this.utility.getUserAddress()));    
    if(addressData.address['subLocality']){delete addressData.address['subLocality']}
    if(addressData.address['locality']){delete addressData.address['locality']}
    const body = {...userData,...addressData, regType:SOCIAL_REGISTRATION_TYPE.REG_GOOGLE}
    this.socialLogin(body);
  }

  appleSingIn(){
    // window.open(
    //   'https://appleid.apple.com/auth/authorize?' +
    //     `client_id=com.desknow.userweb&` +
    //     `redirect_uri=${encodeURIComponent(this.appleRedirectUrl)}&` +
    //     'response_type=code id_token&' +
    //     'scope=name email&' +
    //     'response_mode=form_post&usePopup=true',
    //   '_blank',
    // );

  this.eventListener =  window.addEventListener('message', event => {
    // console.log('evevevevee',result, typeof result, JSON.parse(result))
    const result = JSON.parse(event.data)
    if(result && result.isAppleLogin){
        // const firebaseToken = this.utility.getFirebaseToken();
        let data: any = {
          socialType: SOCIAL_TYPE.apple,
          socialId: result.appleId,
          countryCode: result.countryCode || '',
          name: `${result.firstName} ${result.lastName}`,
          image: (result.picture && result.picture.data.url) || '',
          phoneNo: result.phone || '',
          device: {
           type: 1,
          //  token: firebaseToken || "asdfghjgfdsasdfghj",
         },
          email:result.email
        };
        this.socialLogin(data);
      }

    });

}

  // async socialLogin(body) {
  //   try {
  //     const resp = await this.socialService.socialLogin(body).toPromise();
  //     console.log({ resp });
  //     // statusCode 201 new user
  //     if (resp.statusCode === 201) {
  //       this.profileService.socialUserData = resp.data;
  //       // redirect to complete profile
        
  //       this.ngZone.run(() => {
  //         if (resp && resp.data.profileStep == 0) {
  //           this.router.navigate([PROFILE_CREATE.fullUrl]);
  //         } else {
  //           this.router.navigate([HOME.fullUrl]);
  //         }

  //         // this.router.navigate([COMPLETE_PROFILE.fullUrl, resp.data._id]);
  //       });
  //       // redirect to complete profile, statusCode 200 and may not be verified by keys in response
  //     } else if (resp.statusCode === 200) {
  //       if (
  //         resp.data.phoneVerified &&
  //         resp.data.emailVerified &&
  //         resp.data.email &&
  //         resp.data.phoneNo &&
  //         resp.data.companyType
  //       ) {
  //         // make user logged in

  //         this.accountService.loginSuccess({ ...resp });
  //         setTimeout(async () => {
  //           await this.profileService.getProfileDetail();
  //         }, 100);
  //       } else {
  //         this.profileService.socialUserData = resp.data;
  //         // redirect to complete profile
  //         this.ngZone.run(() => {
  //           if (resp && resp.data.profileStep == 0) {
  //             this.router.navigate([PROFILE_CREATE.fullUrl]);
  //           } else {
  //             this.router.navigate([HOME.fullUrl]);
  //           }
  //           // this.router.navigate([COMPLETE_PROFILE.fullUrl, resp.data._id]);
  //         });
  //       }
  //     }
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // }


  async socialLogin(body) {
    console.log(body , "SocialLoginComponent");
    
    try {
      const resp = await this.socialService.socialLogin(body).toPromise();
      console.log(resp);
      this.ngZone.run(() => {
        this.accountService.loginSuccess(resp);
      });
    } catch (error) {
      console.log({ error });
    }
  }

  getRandomState() {
    var text = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 21; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    this.randomState = text;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.eventListener){
      window.removeEventListener('message',this.eventListener)
    }
  }
}
