import { Component, OnInit } from '@angular/core';
import { User } from '../core/objects/user';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private service: UserService) { }

  userList: User[] = []
  user: User = new User();

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {this.userList = data} );
  }

  changeUser(query: number) : void{
    var any = this.userList.find(({ id }) =>  query == id);
    if(any !== undefined){
      this.user = any;
    }
  }
}
