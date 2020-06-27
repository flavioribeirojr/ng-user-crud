import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserFormModel } from './user-form-model';
import { PasswordMatch } from 'src/app/validators';
import { IsValidBirthday } from 'src/app/validators/is-valid-birthday';
import { IsValidCPF } from 'src/app/validators/is-valid-cpf';

const DefaultFormInitialState = {
  name: '',
  cpf: '',
  rg: '',
  birthday: '',
  sign: '',
  fatherName: '',
  motherName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  streetAddress: '',
  city: '',
  state: '',
  neighborhood: '',
  number: '',
  postalCode: '',
  landline: '',
  phoneNumber: '',
  height: '',
  weight: '',
  bloodType: '',
  color: '',
};

@Injectable()
export class UserFormModelService {
  constructor(private formBuilder: FormBuilder) {}

  createForm(initialState: UserFormModel = DefaultFormInitialState) {
    const formGroup = this.formBuilder.group({
      name: [initialState.name, [Validators.required]],
      cpf: [initialState.cpf, [Validators.required, IsValidCPF]],
      rg: [initialState.rg, [Validators.required]],
      birthday: [initialState.birthday, [Validators.required, IsValidBirthday]],
      sign: [initialState.sign, [Validators.required]],
      fatherName: [initialState.fatherName, [Validators.required]],
      motherName: [initialState.motherName, [Validators.required]],
      email: [initialState.email, [Validators.required, Validators.email]],
      password: [initialState.password, [Validators.required]],
      passwordConfirmation: [initialState.passwordConfirmation, [Validators.required]],
      streetAddress: [initialState.streetAddress, [Validators.required]],
      city: [initialState.city, [Validators.required]],
      state: [initialState.state, [Validators.required]],
      neighborhood: [initialState.neighborhood, [Validators.required]],
      number: [initialState.number, [Validators.required]],
      postalCode: [initialState.postalCode, [Validators.required]],
      landline: [initialState.landline, [Validators.required]],
      phoneNumber: [initialState.phoneNumber, [Validators.required]],
      height: [initialState.height, [Validators.required]],
      weight: [initialState.weight, [Validators.required]],
      bloodType: [initialState.bloodType, [Validators.required]],
      color: [initialState.color, [Validators.required]]
    }, {
      validator: PasswordMatch('password', 'passwordConfirmation')
    });

    return formGroup;
  }
}