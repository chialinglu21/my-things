import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'ly-upload-file-field',
  templateUrl: './upload-file-field.component.html',
  styleUrls: ['./upload-file-field.component.scss'],
})
export class UploadFileFieldComponent implements OnInit {
  fileName: string | null = null;
  file: File | null = null;

  constructor() {}

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    if (event) {
      const file = event && event.item(0);

      // this.onChange(file);
      this.file = file;
      this.fileName = event.item(0).name;
    }
  }

  ngOnInit(): void {}

  onClear() {
    this.fileName = null;
  }
}
