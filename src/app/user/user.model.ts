import { User, UserAddress } from './user';

export class UserModel implements User {
  readonly id: string;
  readonly name: string;
  readonly cpf: string;
  readonly rg: string;
  readonly birthday: string;
  readonly sign: string;
  readonly fatherName: string;
  readonly motherName: string;
  readonly email: string;
  readonly password: string;
  readonly address: UserAddress;
  readonly landline: string;
  readonly phoneNumber: string;
  readonly height: string;
  readonly weight: string;
  readonly bloodType: string;
  readonly color: string;

  constructor(userProperties: User) {
    this.id = userProperties.id || this.generateUniqueID();
    this.name = userProperties.name;
    this.cpf = userProperties.cpf;
    this.rg = userProperties.rg;
    this.birthday = userProperties.birthday;
    this.sign = userProperties.sign;
    this.fatherName = userProperties.fatherName;
    this.motherName = userProperties.motherName;
    this.email = userProperties.email;
    this.password = userProperties.email;
    this.address = userProperties.address;
    this.landline = userProperties.landline;
    this.phoneNumber = userProperties.phoneNumber;
    this.height = userProperties.height;
    this.weight = userProperties.weight;
    this.bloodType = userProperties.bloodType;
    this.color = userProperties.color;
  }

  private generateUniqueID() {
    return Math.random().toString(36).substr(2, 9);
  }
}