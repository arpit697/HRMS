import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
  COMPLETED_RESOURCES,
  DASHBOARD,
  DISCOVER,
  INPROGRESS_RESOURCES,
  LIKED_RESOURCES,
  PREFERENCCES,
  QUICK_ACTIVITIES,
  RESET_PASSWORD,
  SAVED_RESOURCES,
  SEARCH,
  SECTOR_INFO,
  URGENT_HELP,
  FEATURED_RESOURCES,
  HOW_IT_WORKS,
  COURSE_INTRODUCTION,
} from "src/app/constant/routes";
import { HomeGuard } from "src/app/guards/home/home.guard";
import { LandingPageGuard } from "src/app/guards/landing-page/landing-page.guard";
import { ResetPasswordGuard } from "src/app/guards/reset-password/reset-password.guard";

import { FeaturesComponent } from "./features.component";

const routes: Routes = [
  {
    path: "",
    component: FeaturesComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        loadChildren: () =>
          import("./landing-page/landing-page.module").then(
            (m) => m.LandingPageModule
          ),
        // canActivate: [LandingPageGuard],
      },
      // {
      //   path: "",
      //   redirectTo: DISCOVER.path,

      // },
      {
        path: "resources/:id",
        loadChildren: () =>
          import("./main-content/main-content.module").then(
            (m) => m.MainContentModule
          ),
      },
      {
        path: "resource/video/:id",
        loadChildren: () =>
          import("./content-type/content-video/content-video.module").then(
            (m) => m.ContentVideoModule
          ),
      },
      {
        path: "resource/article/:id",
        loadChildren: () =>
          import("./content-type/content-image/content-image.module").then(
            (m) => m.ContentImageModule
          ),
      },
      {
        path: "resource/quiz/:id",
        loadChildren: () =>
          import("./content-type/content-quiz/content-quiz.module").then(
            (m) => m.ContentQuizModule
          ),
      },
      {
        path: "resource/audio/:id",
        loadChildren: () =>
          import("./content-type/content-audio/content-audio.module").then(
            (m) => m.ContentAudioModule
          ),
      },
      {
        path: SEARCH.path,
        loadChildren: () =>
          import("./search/search.module").then((m) => m.SearchModule),
      },

      {
        path: PREFERENCCES.path,
        loadChildren: () =>
          import("./create-profile/create-profile.module").then(
            (m) => m.CreateProfileModule
          ),
        canActivate: [HomeGuard],
        canLoad: [HomeGuard],
      },
      {
        path: DASHBOARD.path,
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
        canActivate: [HomeGuard],
        canLoad: [HomeGuard],
      },
      {
        path: DISCOVER.path,
        loadChildren: () =>
          import("./discover/discover.module").then((m) => m.DiscoverModule),
      },
      {
        path: URGENT_HELP.path,
        loadChildren: () =>
          import("./urgent-help/urgent-help.module").then(
            (m) => m.UrgentHelpModule
          ),
      },
      {
        path: `${SECTOR_INFO.path}/:sectorId`,
        loadChildren: () =>
          import("./sector-info/sector-info.module").then(
            (m) => m.SectorInfoModule
          ),
      },
      {
        path: QUICK_ACTIVITIES.path,
        loadChildren: () =>
          import("./quick-activities/quick-activities.module").then(
            (m) => m.QuickActivitiesModule
          ),
      },
      {
        path: HOW_IT_WORKS.path,
        loadChildren: () =>
          import("./how-it-works/how-it-works.module").then(
            (m) => m.HowItWorksModule
          ),
      },
      {
        path: `${RESET_PASSWORD.path}/:authToken`,
        loadChildren: () =>
          import("../features/reset-password/reset-password.module").then(
            (m) => m.ResetPasswordModule
          ),
        canActivate: [ResetPasswordGuard],
        canLoad: [ResetPasswordGuard],
      },
      {
        path: LIKED_RESOURCES.path,
        loadChildren: () =>
          import("./liked-resources/liked-resources.module").then(
            (m) => m.LikedResourcesModule
          ),
        canActivate: [HomeGuard],
        canLoad: [HomeGuard],
      },
      {
        path: SAVED_RESOURCES.path,
        loadChildren: () =>
          import("./saved-resources/saved-resources.module").then(
            (m) => m.SavedResourcesModule
          ),
        canActivate: [HomeGuard],
        canLoad: [HomeGuard],
      },
      {
        path: COMPLETED_RESOURCES.path,
        loadChildren: () =>
          import("./completed-resources/completed-resources.module").then(
            (m) => m.CompletedResourcesModule
          ),
        canActivate: [HomeGuard],
        canLoad: [HomeGuard],
      },
      {
        path: INPROGRESS_RESOURCES.path,
        loadChildren: () =>
          import("./inprogress-resources/inprogress-resources.module").then(
            (m) => m.InprogressResourcesModule
          ),
        canActivate: [HomeGuard],
        canLoad: [HomeGuard],
      },
      {
        path: `${FEATURED_RESOURCES.path}/:sectorId`,
        loadChildren: () =>
          import("./featured-resources/featured-resources.module").then(
            (m) => m.FeaturedResourcesModule
          ),
      },
      {
        path: "register/:slug",
        loadChildren: () =>
          import("./register-course/register-course.module").then(
            (m) => m.RegisterCourseModule
          ),
      },
      {
        path: `${COURSE_INTRODUCTION.path}/:slug`,
        loadChildren: () =>
          import("./course-introduction/course-introduction.module").then(
            (m) => m.CourseIntroductionModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [HomeGuard, ResetPasswordGuard],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
