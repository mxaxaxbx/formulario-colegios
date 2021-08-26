import { Component, OnInit } from '@angular/core';

interface Role {
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  roles: Role[] = [
    {id: '123', name: 'user', description: 'user desc'},
    {id: '135', name: 'admin', description: 'admin desc'},
    {id: '356', name: 'guest', description: 'guest desc'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
