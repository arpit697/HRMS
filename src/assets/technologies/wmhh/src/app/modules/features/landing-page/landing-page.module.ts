import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageService } from './landing-page.service';
import { NoDataModule } from '../../common/modules/no-data/no-data.module';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { StrapiModule } from 'src/app/pipes/strapi/strapi.module';
import { ImageFallbackModule } from 'src/app/directives/image-fallback/image-fallback.module';
import { SafeModule } from 'src/app/pipes/safe/safe.module';



const PIPES = [AbsoluteRoutingModule, StrapiModule, ImageFallbackModule, SafeModule]

const CUSTOM_MODULES = [NoDataModule]

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ...CUSTOM_MODULES,
    ...PIPES
  ],
  providers:[LandingPageService]
})
export class LandingPageModule { }
