import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentAudioComponent } from './content-audio.component';

const routes: Routes = [{ path: '', component: ContentAudioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentAudioRoutingModule { }
