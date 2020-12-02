import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-list';
  todos = [
    {
      label: 'Bring milk',
      done: false,
      priority: 3,
    },
    {
      label: 'Mobile recharge',
      done: true,
      priority: 1,
    },
    {
      label: 'Cook lunch',
      done: false,
      priority: 3,
    }
];
  addTodo(newTodoLabel: any){
    var newTodo = {
    label: newTodoLabel,
    priority: 1,
    done: false
    };
    this.todos.push(newTodo);
  }
  deleteTodo(todo: { label: string; }){
    this.todos = this.todos.filter( t => t.label !== todo.label)

    
  }
}
