import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserFormModelService } from '../user-form-model/user-form-model.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../user.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  formGroup: FormGroup;
  user: UserModel;

  constructor(
    private userService: UserService,
    private userFormModelService: UserFormModelService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setUser();
    this.initializeFormGroup(this.user);
  }

  get userID() {
    const { id } = this.activatedRoute.snapshot.params;

    return id;
  }

  private setUser() {
    const user = this.userService.getByID(this.userID);

    if (!user) {
      return this.router.navigate(['/users']);
    }

    this.user = user;
  }

  private initializeFormGroup(user: UserModel) {
    const {id, address, ...userPlainObject } = user;

    this.formGroup = this.userFormModelService.createForm({
      ...userPlainObject,
      ...address,
      passwordConfirmation: user.password
    });
  }

  updateUser(user: UserModel) {
    this.userService.update(this.userID, user);

    this.router.navigate(['/users']);
  }

}
