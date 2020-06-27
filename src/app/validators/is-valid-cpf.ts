import { AbstractControl } from '@angular/forms';
import * as cpf from '@fnando/cpf';

export function IsValidCPF(control: AbstractControl): {[key: string]: any} | null {
  if (cpf.isValid(control.value)) {
    return null;
  }

  return {
    cpf: true
  };
}