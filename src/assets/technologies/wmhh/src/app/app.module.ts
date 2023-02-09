import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "./Interceptors/token.interceptor";
import { ConfirmationModalComponent } from "./modules/common/components/confirmation-modal/confirmation-modal.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { LoaderComponent } from "./modules/common/components/loader/loader.component";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ThankYouModule } from "./modules/common/components/thank-you/thank-you.module";
import { TrainingPopupModule } from "./modules/common/components/training-popup/training-popup.module";
import { TitleCasePipe } from "@angular/common";

@NgModule({
  declarations: [AppComponent, LoaderComponent, ConfirmationModalComponent],
  imports: [
    FormsModule,
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    TitleCasePipe,
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationModalComponent],
})
export class AppModule {}
