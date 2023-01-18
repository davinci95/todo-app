import { Component, OnInit } from '@angular/core';
import { Todo } from "./../../models/Todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[]

  inputTodo:string = ''
  
  constructor() {}

    ngOnInit(): void {
       const list = localStorage.getItem('todo')
       this.todos = list !== null ? JSON.parse(list) : []
        
    }

    toggleDone(id:number) {
      this.todos.map((value, i) => {
        if(i === id) value.completed = !value.completed

        return value
      })
    }

    deleteTodo(id:number) {
      this.todos = this.todos.filter((v,i) => { return i !== id})
    }

    addTodo() {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      })
      localStorage.setItem("todo", JSON.stringify(this.todos))
      this.inputTodo = ''
    }
}
