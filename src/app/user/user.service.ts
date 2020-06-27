import { Injectable } from '@angular/core';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  getAll(): UserModel[] {
    return this.parseFromLocalStorage();
  }

  getByID(id: string) {
    const users = this.parseFromLocalStorage();

    return users.find(user => user.id === id);
  }

  erase(user: UserModel) {
    const users = this.parseFromLocalStorage();
    const usersWithoutDeleted = users
      .filter(userFromStorage => userFromStorage.id !== user.id);

    this.saveUsersToStorage(usersWithoutDeleted);
  }

  create(user: UserModel) {
    const users = this.parseFromLocalStorage();

    this.saveUsersToStorage([
      ...users,
      user
    ]);
  }

  update(id: string, userUpdated: UserModel) {
    const users = this.parseFromLocalStorage();
    const updatedUserIndex = users.findIndex(user => user.id === id);

    users[updatedUserIndex] = new UserModel({
      ...userUpdated,
      id
    });

    this.saveUsersToStorage(users);
  }

  private parseFromLocalStorage(): UserModel[] {
    const usersJSON = localStorage.getItem('users');
    
    if (!usersJSON) {
      return [];
    }

    const usersObject = JSON.parse(usersJSON);
    const usersMappedToModel = usersObject.map(userObject => new UserModel(userObject));

    return usersMappedToModel;
  }

  private saveUsersToStorage(users: UserModel[]) {
    localStorage.setItem('users', JSON.stringify(users));
  }
}