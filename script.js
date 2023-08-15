const openModelBtnEl = document.querySelector('#openModelBtn')
const modalTodoWrapperEl = document.querySelector('.modalTodoWrapper')
const btnClose = document.querySelector('#btnClose')

const openTodoModal = () => {
    modalTodoWrapperEl.style.display = 'flex'
}

const closeTodoModal = (event) => {
    event.preventDefault()
    modalTodoWrapperEl.style.display = 'none'
}

openModelBtnEl.addEventListener('click', openTodoModal)
btnClose.addEventListener('click', closeTodoModal)

const submitButton = document.getElementById("#btnSubmit");

btnSubmit.onclick = function(event) {
    event.preventDefault()
  const inputTitle = document.getElementById("inputTitle").value;
  const inputDescription = document.getElementById("inputDescription").value;
  const todoData = [];
  todoData.push(inputTitle, inputDescription);
  console.log(todoData);
}





















































// function addTotodoData() {

// let inputTitleValue = document.getElementsById("inputTitle").value
// let inputDescriptionValue = document.getElementsById("inputDescription").value

// todoData.push(inputTitleValue)
// todoData.push(inputDescriptionValue)

// console.log(todoData);
// }

// addTotodoData(inputTitleValue, inputDescriptionValue);

// const todoData = [];

// function addTotodoData() {
//     let inputTitle = document.getElementsById("inputTitle")
//     let inputDescription = document.getElementsById("inputDescription")

//     let value1 = inputTitle.value
//     let value2 = inputDescription.value

//     todoData.push(value1, value2)
    // inputTitle.value = '';
    // inputDescription.value = '';

//     console.log(todoData);
// }

// btnSubmit.addEventListener('click', addTotodoData)
