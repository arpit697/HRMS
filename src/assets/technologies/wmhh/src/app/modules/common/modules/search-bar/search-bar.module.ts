import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { WhiteSpaceModule } from 'src/app/directives/white-space/white-space.module';



const CUSTOM_MODULES = [WhiteSpaceModule]

const MATERIAL_MODULES = [MatFormFieldModule,FormsModule, MatIconModule,ReactiveFormsModule, MatButtonModule, MatInputModule]

@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    ...CUSTOM_MODULES
  ],
  exports:[SearchBarComponent]
})
export class SearchBarModule { }
