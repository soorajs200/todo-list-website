document.getElementById("add-btn").addEventListener("click", function () {
    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value.trim();
  
    if (todoText === "") {
      alert("Please enter a task.");
      return;
    }
  
    // Create a new list item
    const li = document.createElement("li");
  
    // Add the task text
    li.textContent = todoText;
  
    // Add a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
  
    deleteBtn.addEventListener("click", function () {
      li.remove();
    });
  
    li.appendChild(deleteBtn);
  
    // Add the list item to the todo list
    document.getElementById("todo-list").appendChild(li);
  
    // Clear the input
    todoInput.value = "";
  });