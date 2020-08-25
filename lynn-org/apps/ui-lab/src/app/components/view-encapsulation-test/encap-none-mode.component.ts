import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lynn-org-encap-none-mode',
  template: `
    <p class="title">
      This paragraph from None Mode Component
    </p>
    <p class="title" [innerHTML]="highlightText"></p>
    <p class="title" [innerHTML]="highlightTextOnly"></p>
  `,
  styles: [
    `
      .title {
        color: red;
      }

      .title::after {
        content: '(encap-none-mode.component)';
      }
      .highlight-text {
        background: yellow;
      }
      .highlight-text-only {
        background: lightblue;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class EncapNoneModeComponent implements OnInit {
  highlightText =
    'This paragraph is <span class="highlight-text">innerHTML</span>';
  highlightTextOnly =
    'This paragraph is <span class="highlight-text-only">innerHTML</span>';
  constructor() {}

  ngOnInit(): void {}
}
