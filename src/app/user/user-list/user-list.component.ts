import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: UserModel[] = [];
  displayedColumns: string[] = ['name', 'cpf', 'rg', 'birthday', 'phoneNumber', 'sign', 'actions'];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setUsers();
  }

  private setUsers() {
    this.users = this.userService.getAll();
  }

  goToEdit(user: UserModel) {
    this.router.navigate([`/users/edit/${user.id}`]);
  }

  deleteUser(user: UserModel) {
    const userConfirmed = window.confirm(`Confirmar exclusão do usuário ${user.name}?`);

    if (!userConfirmed) {
      return;
    }

    this.userService.erase(user);
    this.setUsers();
  }

}
