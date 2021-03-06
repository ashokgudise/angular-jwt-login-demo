import { Component, OnInit } from '@angular/core';
import {User} from "../shared/model/user";
import {UserService} from "../shared/service/UserService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }


  ngOnInit() {

    /*this.userService.getUsers().subscribe(
      users => {
        this.users = users;
      }
    );*/
  }

}
