import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LyMaterialModule } from '@lynn-org/ly-common';
import * as fromComponents from './components';
import { EncapEmulatedModeComponent } from './components/view-encapsulation-test/encap-emulated-mode.component';
import { EncapNoneModeComponent } from './components/view-encapsulation-test/encap-none-mode.component';
import { EncapShadowDomModeComponent } from './components/view-encapsulation-test/encap-shadow-dom-mode.component';

@NgModule({
  declarations: [AppComponent, ...fromComponents.components],
  imports: [BrowserModule, BrowserAnimationsModule, LyMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
