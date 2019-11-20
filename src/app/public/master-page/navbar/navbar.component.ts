import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userInfo: UserModel;
  userLogged: boolean = false;
  userName: String;

  subscripcion: Subscription;

  constructor(private secServices: SecurityService) { }

  ngOnInit() {
    this.verifyUserSession();
  }

  verifyUserSession(){
    this.subscripcion = this.secServices.getUserInfo().subscribe(user =>{
      this.userInfo = user;
      this.updateInfo();
    });
  }

  updateInfo(){
    this.userLogged = this.userInfo.isLogged;
    this.userName = `${this.userInfo.firstName} ${this.userInfo.secondName} ${this.userInfo.firstLastname} ${this.userInfo.secondLastname}`;
  }

}
