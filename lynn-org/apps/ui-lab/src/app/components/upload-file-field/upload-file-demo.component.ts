import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ly-upload-file-demo',
  template: `
    <h3>Normal Input-File Style</h3>
    <input type="file" />

    <h3>Custom Input-File Style</h3>
    <ly-upload-file-field></ly-upload-file-field>
    <mat-slide-toggle></mat-slide-toggle>
  `,
  styles: [
    `
      h3 {
        margin: 24px 0 8px 0;
      }
    `,
  ],
})
export class UploadFileDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
