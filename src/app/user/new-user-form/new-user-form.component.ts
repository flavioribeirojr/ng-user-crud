import { Component, OnInit } from '@angular/core';
import { BrazilianStates } from '../../constants/states';
import { BloodTypes } from '../../constants/blood-types';
import { FormGroup } from '@angular/forms';
import { UserFormModelService } from '../user-form-model/user-form-model.service';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent implements OnInit {
  states = BrazilianStates;
  bloodTypes = BloodTypes;
  formGroup: FormGroup;

  constructor(
    private userFormModelService: UserFormModelService,
    private userService: UserService,
    private router: Router
  ) {
    this.initializeForm();
  }

  ngOnInit() {
  }

  private initializeForm() {
    this.formGroup = this.userFormModelService.createForm();
  }

  saveUser(user: UserModel) {
    this.userService.create(user);

    this.router.navigate(['/users']);
  }

}
