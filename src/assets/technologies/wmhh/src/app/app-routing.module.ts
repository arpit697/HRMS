import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ACCOUNT, VERIFY_EMAIL } from "./constant/routes";
import { UserResolverService } from "./resolvers/user-resolver.service";
import { ValidateEmailGuard } from "./guards/validate-email.guard";

const routes: Routes = [
  {
    path: `${VERIFY_EMAIL.path}/:token`,
    loadChildren: () =>
      import("./modules/account/verify-email/verify-email.module").then(
        (m) => m.VerifyEmailModule
      ),
      canActivate: [ValidateEmailGuard],
  },
  {
    path: "",
    loadChildren: () =>
      import("./modules/features/features.module").then(
        (m) => m.FeaturesModule
      ),
    resolve: { userData: UserResolverService },
  },
  {
    path: "about-us",
    loadChildren: () =>
      import("./modules/about-us/about-us.module").then((m) => m.AboutUsModule),
  },
  {
    path: "privacy-policy",
    loadChildren: () =>
      import("./modules/privacy-policy/privacy-policy.module").then(
        (m) => m.PrivacyPolicyModule
      ),
  },
  {
    path: "terms-and-conditions",
    loadChildren: () =>
      import("./modules/terms-and-conditions/terms-and-conditions.module").then(
        (m) => m.TermsAndConditionsModule
      ),
  },
  {
    path: "oauth",
    loadChildren: () =>
      import("./modules/oauth/oauth.module").then((m) => m.OauthModule),
  },
  {
    path: "data-deletion",
    loadChildren: () =>
      import("./modules/data-deletion/data-deletion.module").then(
        (m) => m.DataDeletionModule
      ),
  },
  { path: 'link-expired', loadChildren: () => import('./modules/link-expired/link-expired.module').then(m => m.LinkExpiredModule) },
  {
    path: "**",
    loadChildren: () =>
      import("./modules/not-found/not-found.module").then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "top",
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule],
  providers: [ValidateEmailGuard],
})
export class AppRoutingModule {}
