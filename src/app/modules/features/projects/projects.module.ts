import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RuTableModule } from '../../common/modules/ru-table/ru-table.module';

const MATERIAL = [MatCardModule, MatIconModule];

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule, RuTableModule, ...MATERIAL],
})
export class ProjectsModule {}
