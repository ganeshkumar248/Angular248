import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remote-users',
  templateUrl: './remote-users.component.html',
  styleUrls: ['./remote-users.component.css']
})
export class RemoteUsersComponent implements OnInit {

  getUrl: string = "https://reqres.in/api/users";
  users: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  listOfUsers() {
    console.log('ganesh');
    this.httpClient.get(this.getUrl).subscribe((resData:any)=>{
      this.users = resData.data;
    })
    console.log(this.users);
  }

}
