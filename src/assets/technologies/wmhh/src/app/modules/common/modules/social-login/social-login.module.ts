import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SocialLoginComponent } from "./social-login.component";
import { FacebookModule } from "src/app/modules/socialLogin/facebook/facebook.module";
import { SocialLoginService } from "./services/social-login.service";
import { GoogleLoginModule } from 'src/app/modules/socialLogin/google-login/google-login.module';
import { GoogleModule } from 'src/app/modules/socialLogin/google/google.module';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';
@NgModule({
  declarations: [SocialLoginComponent],
  imports: [CommonModule, FacebookModule, GoogleModule, GoogleLoginModule],
  exports: [SocialLoginComponent],
  providers: [SocialLoginService, GoogleAnalyticsService],
})
export class SocialLoginModule {}
