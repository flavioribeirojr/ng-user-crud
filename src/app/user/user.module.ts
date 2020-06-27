import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { NgxMaskModule} from 'ngx-mask';
import { ColorPickerModule } from 'ngx-color-picker';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserFormModelService } from './user-form-model/user-form-model.service';
import { UserService } from './user.service';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'new',
    component: NewUserFormComponent
  },
  {
    path: 'edit/:id',
    component: EditUserComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NgxMaskModule.forRoot(),
    CommonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    ColorPickerModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [NewUserFormComponent, UserFormComponent, UserListComponent, EditUserComponent],
  providers: [UserFormModelService, UserService]
})
export class UserModule { }
