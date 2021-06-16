import { Todo } from "../classes";
import { todoList } from "../index";

const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
const btnClear = document.querySelector(".clear-completed")
const ulFilters = document.querySelector(".filters")

export const createTodoHTML = ( todo ) => {
    const htmlTodo = `
    <li class="${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''}>
            <label>${todo.task}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

// Events
txtInput.addEventListener('keyup', (event) => {
    const text = txtInput.value.trim();
    if(event.keyCode === 13 && text !== ""){
        const newTodo = new Todo(text);
        todoList.newTodo(newTodo);
        createTodoHTML(newTodo);
        
        txtInput.value = "";
        console.log(todoList);
    }
})

divTodoList.addEventListener("click", (event) => {
    console.log(event)
    const elementName = event.target.localName;
    const todoElement = event.target.parentElement.parentElement;
    const todoId = todoElement.getAttribute('data-id')
    
    if(elementName.includes('input')){
        event.target.checked ? todoList.checkCompleted(todoId) : todoList.unCheckCompleted(todoId);
        todoElement.classList.toggle('completed');
    }

    if(elementName.includes('button')){
        todoList.deleteTodo(todoId);
        divTodoList.removeChild(todoElement);
    }
})

btnClear.addEventListener('click', (event) => {
    todoList.deleteCompleted();
    for(let i = divTodoList.children.length - 1; i >= 0; i--){
        const element = divTodoList.children[i];
        if(element.classList.contains("completed")){
            divTodoList.removeChild(element);
        }
    }
})

ulFilters.addEventListener('click', (event) => {
    const filter = event.target.text;
    if(!filter) return;

    for(const element of divTodoList.children){
        element.classList.remove('hidden');
        const completed = element.classList.contains("completed");
        const functions = {
            "Pendientes":  () => {
                if(completed){
                    element.classList.add("hidden");
                }
            },
            "Completados": () => {
                if(!completed){
                    element.classList.add("hidden");
                }
            }
        }
        if(functions[filter]){
            functions[filter]();
        }
    }
})