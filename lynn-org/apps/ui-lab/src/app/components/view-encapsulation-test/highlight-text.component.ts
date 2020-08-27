import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'lynn-org-highlight-text',
  template: `<span [innerHTML]="text"></span>`,
  styles: [
    `
      .highlight-text {
        background: yellow;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HighlightTextComponent implements OnInit {
  @Input() text = '';

  constructor() {}

  ngOnInit(): void {}
}
