const addButton = document.querySelector("#add-button");
const list = document.querySelector(".list");

addButton.addEventListener("click", function (event) {
  event.preventDefault();

  const taskInput = document.querySelector("#input-task");
  const task = taskInput.value;

  if (task !== "") {
    const newItem = document.createElement("li");
    newItem.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    newItem.appendChild(deleteButton);

    list.appendChild(newItem);
    taskInput.value = "";
  }
});

list.addEventListener("click", function (event) {
  if (
    event.target.matches(".delete-button") ||
    event.target.matches(".fa-trash")
  ) {
    const item = event.target.closest("li");
    list.removeChild(item);
  }
});

list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("complete-task");
  }
});
