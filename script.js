//Javascript
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const ul = document.querySelector("ul");
const li = document.querySelector("li");

addBtn.addEventListener("click", function () {

  let text = taskInput.value.trim();
  if (text === "") {
    alert(" No task Added ")
    return;
  }

  let li = taskCreated(text);
  ul.appendChild(li);

  taskInput.value = "";

})
function taskCreated(text) {
  let li = document.createElement("li");
  let span = document.createElement("span")
  span.textContent = text;
  let editBtn = document.createElement("button")
  editBtn.textContent = " Edit ";
  let delBtn = document.createElement("button")
  delBtn.textContent = "Delete";

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(delBtn);

  editBtn.addEventListener("click", function () {

    if (editBtn.textContent === " Edit ") {
      let inputBox = document.createElement("input");
      inputBox.type = "text";
      inputBox.value = span.textContent;

      li.replaceChild(inputBox, span);

      editBtn.textContent = "Save";
    }
    else {
      let inputBox = li.querySelector("input");
      let newValue = inputBox.value.trim();

      if (newValue === "") {
        alert("Task cannot be empty");
        return;
      }
      span.textContent = newValue;

      li.replaceChild(span, inputBox);
      editBtn.textContent = " Edit ";
    }
  });

  delBtn.addEventListener("click", function () {
    li.remove(text);
  });
  return (li);
}
