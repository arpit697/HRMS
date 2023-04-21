import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './includes/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './includes/footer/footer.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { RoutingModule } from 'src/app/pipes/routing/routing.module';
import { HelpComponent } from './includes/header/help/help.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CovidComponent } from './includes/utilities/popups/covid/covid.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
const MATERIAL = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatListModule,
  MatExpansionModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
];

@NgModule({
  declarations: [
    FeaturesComponent,
    HeaderComponent,
    FooterComponent,
    HelpComponent,
    CovidComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    CarouselModule,
    RoutingModule,
    ...MATERIAL,
  ],
})
export class FeaturesModule {}
