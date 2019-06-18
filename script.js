const tasks = ["buy milk", "eat dinner", "nail javascript", "give feedback"];

const createElement = value => {
  const li = document.createElement("li");
  li.textContent = value;
  toDoList.appendChild(li);
};

const toDoList = document.getElementById("todo-list");
for (let task of tasks) {
  createElement(task);
}

toDoList.addEventListener("click", event => {
  event.target.classList.toggle("done");
});

// create element and listen to keyup event for input
const input = document.querySelector("input");
input.addEventListener("keyup", event => {
  const enterKey = 13;
  if (event.keyCode === enterKey) {
    event.preventDefault();
    createElement(input.value);
  }
});

// create element and listen to click event for button
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  createElement(input.value);
});
