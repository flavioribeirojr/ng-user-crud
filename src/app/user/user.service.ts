import { Injectable } from '@angular/core';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  create(user: UserModel) {
    const users = this.parseFromLocalStorage();

    this.saveUsersToStorage([
      ...users,
      user
    ]);
  }

  private parseFromLocalStorage(): UserModel[] {
    const usersJSON = localStorage.getItem('users');
    
    if (!usersJSON) {
      return [];
    }

    return JSON.parse(usersJSON);
  }

  private saveUsersToStorage(users: UserModel[]) {
    localStorage.setItem('users', JSON.stringify(users));
  }
}