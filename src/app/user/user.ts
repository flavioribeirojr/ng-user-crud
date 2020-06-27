export interface UserAddress {
  streetAddress: string;
  city: string;
  state: string;
  neighborhood: string;
  number: string;
  postalCode: string;
}

export interface User {
  id?: string;
  name: string;
  cpf: string;
  rg: string;
  birthday: string;
  sign: string;
  fatherName: string;
  motherName: string;
  email: string;
  password: string;
  address: UserAddress;
  landline: string;
  phoneNumber: string;
  height: string;
  weight: string;
  bloodType: string;
  color: string;
}