import { FormGroup } from "@angular/forms";

export function PasswordMatch(passwordFieldName: string, passwordConfirmationFieldName: string) {
  return function validator(formGroup: FormGroup) {
    const passwordControl= formGroup.controls[passwordFieldName];
    const passwordConfirmationControl = formGroup.controls[passwordConfirmationFieldName];

    if (passwordControl.value !== passwordConfirmationControl.value) {
      return passwordConfirmationControl.setErrors({
        ...passwordConfirmationControl.errors,
        passwordsDontMatch: true
      });
    }

    return passwordConfirmationControl.setErrors(null);
  }
}