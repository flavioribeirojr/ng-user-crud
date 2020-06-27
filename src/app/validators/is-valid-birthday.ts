import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export function IsValidBirthday(control: AbstractControl): {[key: string]: any} | null {
  const birthdayDate = moment(control.value, 'DD/MM/YYYY', true);

  if (birthdayDate.isValid() && birthdayDate.isBefore(moment())) {
    return null;
  }

  return {
    birthday: true
  };
}