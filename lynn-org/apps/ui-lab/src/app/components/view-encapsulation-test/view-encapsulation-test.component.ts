import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lynn-org-view-encapsulation-test',
  templateUrl: './view-encapsulation-test.component.html',
  styleUrls: ['./view-encapsulation-test.component.scss'],
})
export class ViewEncapsulationTestComponent implements OnInit {
  highlightText =
    'This paragraph is <span class="highlight-text">innerHTML</span>';
  constructor() {}

  ngOnInit(): void {}
}
