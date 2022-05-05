import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  newTodo: string = "";

  todoList: any[] = [
    { Todo: "Learn ReactJs basics", IsChecked: false },
    { Todo: "Pratice ReactJS", IsChecked: false },
    { Todo: "code Portfolio in React", IsChecked: false },
    { Todo: "Learn React Navie", IsChecked: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addNewTodo() {
    this.todoList.push({ Todo: this.newTodo, IsChecked: false });
  }

  onCheckboxChange(todo: string) {
    let todoObj: any = this.todoList.find(item => item.Todo == todo);
    if (todoObj.IsChecked == true)
      todoObj.IsChecked = false;
    else {
      todoObj.IsChecked = true;
    }
  }

  deleteTodo(name: string) {
    let index = this.todoList.findIndex(todo => todo == name);
    this.todoList.splice(index, 1);
  }

  deleteAllTodos() {
    this.todoList= [];
  }

  deleteDoneTodos() {
    this.todoList.forEach((todo,) => {
      if(todo.IsChecked == true) {
        const index = this.todoList.findIndex(todo => todo.IsChecked == true);
        this.todoList.splice(index, 1);
      }
     

      // this.todoList.findIndex(todo => todo.IsChecked == true);
    });
  }

  selectTodo(name: string) {
    this.newTodo = name;
  }

  handleClear() {
    this.newTodo = "";
  }

  
}
