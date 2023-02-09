import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { OtpBoxComponent } from "./otp-box.component";
import { KeysModule } from "src/app/pipes/keys/keys.module";
import { OtpDirectiveModule } from "src/app/directives/otp-directive/otp-directive.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [OtpBoxComponent],
  imports: [
    CommonModule,
    // MatFormFieldModule,
    MatInputModule,
    KeysModule,
    OtpDirectiveModule,
    FormsModule,
    ReactiveFormsModule,
    // ButtonLoaderModule,
    MatButtonModule,
    KeysModule,
  ],
  exports: [OtpBoxComponent],
  providers: [],
})
export class OtpBoxModule {}
