export class Todo{

    static fromJsonList(objList){
        const taskList = objList.map(obj => Todo.fromJson(obj));
        return taskList;
    }

    static fromJson({ id, task, completed, createdAt }) {
        const tempTodo = new Todo(task);
        tempTodo.id = id;
        tempTodo.completed = completed;
        tempTodo.createdAt = new Date(createdAt);
        return tempTodo;
    }
    
    constructor( task ){
        this.task = task;
        this.id = new Date().getTime();
        this.completed = false;
        this.createdAt = new Date()
    }

}