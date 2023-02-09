import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowItWorksComponent } from './how-it-works.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
const routes: Routes = [{ path: '', component: HowItWorksComponent }];



const MATERIAL = [ MatIconModule]

@NgModule({
  declarations: [HowItWorksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...MATERIAL
  ]
})
export class HowItWorksModule { }
