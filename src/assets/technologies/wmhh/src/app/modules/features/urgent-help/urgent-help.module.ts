import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrgentHelpComponent } from './urgent-help.component';
import { RouterModule, Routes } from '@angular/router';
import { SafeModule } from 'src/app/pipes/safe/safe.module';
const routes: Routes = [{ path: '', component: UrgentHelpComponent }];



const PIPES = [SafeModule]

@NgModule({
  declarations: [UrgentHelpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...PIPES
  ]
})
export class UrgentHelpModule { }
