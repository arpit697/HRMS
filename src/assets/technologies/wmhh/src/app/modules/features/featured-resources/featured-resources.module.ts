import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedResourcesComponent } from './featured-resources.component';
import { ContentCardModule } from '../../common/modules/content-card/content-card.module';
import { NoDataModule } from '../../common/modules/no-data/no-data.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: '', component: FeaturedResourcesComponent }];



const CUSTOM_MODULES = [ContentCardModule, NoDataModule, InfiniteScrollModule]

@NgModule({
  declarations: [FeaturedResourcesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...CUSTOM_MODULES
  ]
})
export class FeaturedResourcesModule { }
