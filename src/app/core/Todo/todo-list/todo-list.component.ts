import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/Todo';
import { TodoService } from '../../todoService/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
listtodo:any;
  constructor(private servicetodo:TodoService) { }

  ngOnInit(): void {
  this.servicetodo.getTodos().subscribe(
      (result)=>{
        this.listtodo=result;
      }
    );
  }

}
