import { ViewEncapsulationTestComponent } from './view-encapsulation-test/view-encapsulation-test.component';
import { EncapEmulatedModeComponent } from './view-encapsulation-test/encap-emulated-mode.component';
import { EncapNoneModeComponent } from './view-encapsulation-test/encap-none-mode.component';
import { EncapShadowDomModeComponent } from './view-encapsulation-test/encap-shadow-dom-mode.component';
import { HighlightTextComponent } from './view-encapsulation-test/highlight-text.component';
import { GoogleCalendarPracticeComponent } from './google-calendar-practice/google-calendar-practice.component';
import { from } from 'rxjs';

export const components: any[] = [
  ViewEncapsulationTestComponent,
  EncapEmulatedModeComponent,
  EncapNoneModeComponent,
  EncapShadowDomModeComponent,
  HighlightTextComponent,
  GoogleCalendarPracticeComponent,
];

export * from './view-encapsulation-test/view-encapsulation-test.component';
export * from './view-encapsulation-test/encap-emulated-mode.component';
export * from './view-encapsulation-test/encap-none-mode.component';
export * from './view-encapsulation-test/encap-shadow-dom-mode.component';
export * from './view-encapsulation-test/highlight-text.component';
export * from './google-calendar-practice/google-calendar-practice.component';
