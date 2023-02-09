import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickActivitiesComponent } from './quick-activities.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NoDataModule } from '../../common/modules/no-data/no-data.module';
import { SafeModule } from 'src/app/pipes/safe/safe.module';
import { LikeModule } from '../../common/modules/like/like.module';
import { BookmarkModule } from '../../common/modules/bookmark/bookmark.module';
import { ContentTypeIconModule } from 'src/app/pipes/content-type-icon/content-type-icon.module';
import { TooltipInfoModule } from 'src/app/directives/tooltip-info/tooltip-info.module';
import { ContentTypeModule } from 'src/app/pipes/content-type/content-type.module';



const routes: Routes = [{ path: '', component: QuickActivitiesComponent }];




const PIPES = [SafeModule, ContentTypeIconModule, ContentTypeModule]

const CUSTOM_MODULES = [NoDataModule];
const DIRECTIVES = [TooltipInfoModule]

@NgModule({
  declarations: [QuickActivitiesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
    ...CUSTOM_MODULES,
    ...PIPES,
    LikeModule,
    BookmarkModule,
    ...DIRECTIVES
  ],
  exports:[QuickActivitiesComponent]
})
export class QuickActivitiesModule { }
