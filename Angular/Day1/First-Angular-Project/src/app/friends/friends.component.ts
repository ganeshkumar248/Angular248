import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friendsArray: String[] = ["Munna Bhai", "Guddu Pandit", "Chotu"];

  constructor() { }

  ngOnInit(): void {
  }

}
