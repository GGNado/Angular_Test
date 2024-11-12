import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {UserComponent} from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import {NgForOf} from "@angular/common";
import {TasksComponent} from "./tasks/tasks.component";
// DECORATORE
@Component({
  selector: 'app-root', // nome del tag html
  standalone: true,
    imports: [HeaderComponent, UserComponent, NgForOf, TasksComponent], // importa il componente header
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
    users = DUMMY_USERS;
    //selectedUserId =  this.users[0].id; // default value
    selectedUserId =  ''; // default value

    onSelectUser(id: string){
        this.selectedUserId = id;
    }

    get selectedUser(){
        return this.users.find(user => user.id === this.selectedUserId)!;
    }
}
