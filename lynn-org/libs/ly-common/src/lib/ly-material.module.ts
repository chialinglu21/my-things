import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    HttpClientModule,
  ],
})
export class LyMaterialModule {}
