const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list");
let toDoArray = [];
const TODOS_KEY = "todos";


todoForm.addEventListener("submit", submitToDo);

function submitToDo(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObject = {
        text: newTodo,
        id : Date.now(),
    }
    toDoArray.push(newTodoObject);
    showTodo(newTodoObject)
    saveTodo();   
}

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDoArray));
}

const savedTodos =  localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    toDoArray = parsedTodos;
    parsedTodos.forEach(showTodo);
}

function showTodo(whatToDo) {
    const li = document.createElement("li");
    // id 세팅하는 법
    li.id = whatToDo.id;
    const span = document.createElement("span");
    span.innerText = `${whatToDo.text} `;
    
    const btn = document.createElement("button");
    btn.innerText = "❌";

    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(btn);
    
    btn.addEventListener("click", deleteTodo);
}

function deleteTodo(event) {
    const removeLi = event.target.parentElement;
    toDoArray = toDoArray.filter((item) => item.id !== parseInt(removeLi.id));
    //removeLi. id를 span first child의 innerText로 한 다음에 if 문 사용해서 같으면 해볼까? -> 이거 안됨 (aa 랑 a의 경우..)
    removeLi.remove();
    saveTodo();
}
