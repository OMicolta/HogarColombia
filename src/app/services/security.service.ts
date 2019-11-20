import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  userInfo = new BehaviorSubject<UserModel>(new UserModel());

  constructor() { }

  getUserInfo(){
    return this.userInfo.asObservable();
  }

  loginUser(username: String, pass: String){
    let user = null;
    if(username == "admin@gmail.com" && pass == "12345678"){
      user = new UserModel();
      user.firstName = 'Administrator';
      user.secondName = 'of';
      user.firstLastname = 'system';
      user.email = 'admin@gmail.com';
      user.isLogged = true;
      this.userInfo.next(user)
    }
    return user;
  }

}
