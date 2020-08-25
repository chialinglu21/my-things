import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lynn-org-encap-emulated-mode',
  template: `
    <p class="title">
      This paragraph from Emulated Mode Component.
    </p>
    <p class="title" [innerHTML]="highlightText"></p>
  `,
  styles: [
    `
      .title {
        color: blue;
      }
      .title::after {
        content: '(encap-emulated-mode.component)';
      }
      /* .highlight-text {
        background: yellow;
      } */
      :host ::ng-deep .highlight-text {
        background: yellow;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EncapEmulatedModeComponent implements OnInit {
  highlightText =
    'This paragraph is <span class="highlight-text">innerHTML</span>';
  constructor() {}

  ngOnInit(): void {}
}
