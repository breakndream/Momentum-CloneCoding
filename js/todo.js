const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list");
let toDoArray = [];
const TODOS_KEY = "todos";

function submitToDo(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    toDoArray.push(newTodo);
    todoInput.value = "";
    showTodo(newTodo)
    saveTodo();   
}

function showTodo(whatToDo) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = `${whatToDo} `;
    
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}

function deleteTodo(event) {
    const removeLi = event.target.parentElement;
    console.log(removeLi);
    //removeLi. id를 span first child의 innerText로 한 다음에 
    removeLi.remove();
  
}

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDoArray));
}

todoForm.addEventListener("submit", submitToDo);

const savedTodos =  localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    // so 중요!!!!!!! 이거 안하면 reload 했을 때 날아감!!!!!!!!!
    toDoArray = parsedTodos;
    //parameter 안에 item 자동 들어감
    parsedTodos.forEach(showTodo)

    /**
     * function sayHello(item) {
     * console.log("this is the turn of "+ item)
     * }
     * 
     * parsedTodos.forEach(sayHello)와 동일
     */
    // parsedTodos.forEach((item) => console.log("this is the turn of ", item))
}

