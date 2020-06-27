import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrazilianStates } from '../../constants/states';
import { BloodTypes } from '../../constants/blood-types';
import { FormGroup } from '@angular/forms';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  states = BrazilianStates;
  bloodTypes = BloodTypes;

  @Input() form: FormGroup;
  @Output() onFormSubmit = new EventEmitter<UserModel>();

  constructor() { }

  ngOnInit() {
  }

  get formControls() {
    return this.form.controls;
  }

  onColorpickerChange(color: string) {
    this.formControls.color.setValue(color);
  }

  onSubmit() {
    if (!this.form.valid) {
      return this.markAllFieldsAsTouched();
    }

    const values = this.form.getRawValue();

    const user = new UserModel({
      ...values,
      address: {
        streetAddress: values.streetAddress,
        city: values.city,
        neighborhood: values.neighborhood,
        number: values.number,
        postalCode: values.postalCode,
        state: values.state
      }
    });

    this.onFormSubmit.emit(user);
  }

  private markAllFieldsAsTouched() {
    Object
      .keys(this.form.controls)
      .forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({ onlySelf: true });
        control.markAsDirty({ onlySelf: true });
      });
  }

}
