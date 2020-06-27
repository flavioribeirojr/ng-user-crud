import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationErrorMessageComponent } from './validation-error-message/validation-error-message.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    ValidationErrorMessageComponent
  ],
  exports: [
    ValidationErrorMessageComponent
  ]
})
export class SharedModule { }
