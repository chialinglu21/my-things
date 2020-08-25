import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lynn-org-encap-shadow-dom-mode',
  template: `
    <p class="title">
      This paragraph from ShadowDom Mode Component.
    </p>
    <p class="title" [innerHTML]="highlightText"></p>
  `,
  styles: [
    `
      .title {
        border: 1px solid green;
      }
      .title::after {
        content: '(encap-shadow-dom-mode.componet)';
      }
      .highlight-text {
        background: yellow;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class EncapShadowDomModeComponent implements OnInit {
  highlightText =
    'This paragraph is <span class="highlight-text">innerHTML</span>';
  constructor() {}

  ngOnInit(): void {}
}
