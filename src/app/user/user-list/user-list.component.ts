import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../user.model';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  usersDataSource = new MatTableDataSource<UserModel>([]);
  displayedColumns: string[] = ['name', 'cpf', 'rg', 'birthday', 'phoneNumber', 'sign', 'actions'];

  @ViewChild(MatPaginator, {read: false}) paginator: MatPaginator;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setUsers();
  }

  private setUsers() {
    const users = this.userService.getAll();

    this.usersDataSource = new MatTableDataSource<UserModel>(users);
    this.usersDataSource.paginator = this.paginator;
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
