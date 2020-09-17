import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LyMaterialModule } from '@lynn-org/ly-common';
import * as fromComponents from './components';
import { HttpClientModule } from '@angular/common/http';
import { GovOpenApiService } from './services/gov-open-api.service';
import { UploadFileFieldComponent } from './components/upload-file-field/upload-file-field.component';
import { UploadFileDemoComponent } from './components/upload-file-field/upload-file-demo.component';

@NgModule({
  declarations: [AppComponent, ...fromComponents.components],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LyMaterialModule,
    HttpClientModule,
  ],
  providers: [GovOpenApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
