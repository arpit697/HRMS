import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { RuJobCardModule } from '../../common/modules/common-job-card/ru-job-card.module';
import { MatDividerModule } from '@angular/material/divider';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatIconModule } from '@angular/material/icon';
import { RuButtonModule } from '../../common/modules/common-button/ru-button.module';
import { RoutingModule } from 'src/app/pipes/routing/routing.module';
import { MatButtonModule } from '@angular/material/button';
import { GalleryComponent } from './appinventiv-gallery-carousel/gallery.component';
import { LatestJobOpeningsComponent } from './latest-job-openings-carousel/latest-job-openings.component';
import { NewMembersComponent } from './new-members-carousel/new-members.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GalleryDialogComponent } from './appinventiv-gallery-carousel/gallery-dialog/gallery-dialog.component';
import { LatestAtAppinventivCarouselComponent } from './latest-at-appinventiv-carousel/latest-at-appinventiv-carousel.component';
import { ReferralBonusComponent } from './referral-bonus/referral-bonus.component';
import { MatSelectModule } from '@angular/material/select';

const MATERIAL = [
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatDialogModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    HomeComponent,
    GalleryComponent,
    GalleryDialogComponent,
    LatestJobOpeningsComponent,
    NewMembersComponent,
    LatestAtAppinventivCarouselComponent,
    ReferralBonusComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    RuButtonModule,
    RoutingModule,
    RuJobCardModule,
    MatButtonModule,
    ...MATERIAL,
  ],
})
export class HomeModule { }
