import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../core/objects/user';
import { UserService } from '../core/user.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private service: UserService, public dialog: MatDialog) { }

  userList: User[] = []
  user: User = new User();

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {this.userList = data} );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '500px',
      data: this.user
    })
  }
  

  changeUser(query: number) : void{
    var any = this.userList.find(({ id }) =>  query == id);
    if(any !== undefined){
      this.user = any;
    }
  }
}
