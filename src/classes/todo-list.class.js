import { Todo } from "./todo.class";

export class TodoList{
    constructor(){
        this.loadLocalStorage();
    }

    newTodo(todo){
        console.log(todo);
        this.todos.push(todo);
        this.saveLocalStorage();
    }

    deleteTodo(id){
        this.todos = this.todos.filter((todo) => todo.id != id);
        this.saveLocalStorage();
    }

    checkCompleted(id){
        console.log(id)
        const todo = this.todos.find((todo) => todo.id == id);
        todo.completed = true;
        this.saveLocalStorage();
    }

    unCheckCompleted(id){
        console.log(id)
        const todo = this.todos.find((todo) => todo.id == id);
        todo.completed = false;
        this.saveLocalStorage();
    }

    deleteCompleted(){
        this.todos = this.todos.filter((todo) => !todo.completed)
        this.saveLocalStorage();
    }

    saveLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    loadLocalStorage(){
        this.todos = localStorage.getItem('todo') ?
                        this.todos = Todo.fromJsonList(JSON.parse(localStorage.getItem('todo'))) :
                        [];
    }
}