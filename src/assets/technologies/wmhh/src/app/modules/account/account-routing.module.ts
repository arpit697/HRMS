import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RESET_PASSWORD } from "src/app/constant/routes";

import { AccountComponent } from "./account.component";

const routes: Routes = [
  {
    path: "",
    component: AccountComponent,
    children: [
      {
        path: "",
        redirectTo: RESET_PASSWORD.path,
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
