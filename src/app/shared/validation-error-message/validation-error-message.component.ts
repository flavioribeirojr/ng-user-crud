import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validation-error-message',
  templateUrl: './validation-error-message.component.html',
  styleUrls: ['./validation-error-message.component.scss']
})
export class ValidationErrorMessageComponent implements OnInit {
  @Input() control: FormControl;
  @Input() errorMessages: { [key: string]: string };

  constructor() { }

  ngOnInit() {
  }

  get hasError() {
    return this.control.errors && (this.control.dirty || this.control.touched);
  }

  get firstError() {
    const errorKeys = Object.keys(this.control.errors);
    const firstErrorKey = errorKeys[0];

    return this.errorMessages[firstErrorKey];
  }

}
