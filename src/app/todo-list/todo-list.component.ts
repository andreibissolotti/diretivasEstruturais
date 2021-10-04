import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todoitem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  tasks: TodoItem[] = [
    {description: 'Arrumar a cama', done: true}, 
    {description: 'Fazer o trabalho pratico do bootCamp', done: false}
    ];

}
