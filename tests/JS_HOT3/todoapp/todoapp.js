// Pre-populated tasks
const initialTasks = [
  "Buy groceries",
  "Complete homework",
  "Attend meeting at 3 PM",
  "Clean the house",
  "Prepare dinner"
];

// Select DOM elements
const taskList = document.getElementById("taskList");
const newTaskInput = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTaskButton");

// Function to render the task list
function renderTasks() {
  taskList.innerHTML = '';
  initialTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = task;

    // Add remove button
    const removeButton = document.createElement("button");
    removeButton.className = "btn btn-danger btn-sm";
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
      removeTask(index);
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);
  });
}

// Function to add a new task
function addTask() {
  const newTask = newTaskInput.value.trim();
  if (newTask !== "") {
    initialTasks.push(newTask);  // Add task to the list
    newTaskInput.value = "";      // Clear input field
    renderTasks();                // Re-render the task list
  }
}

// Function to remove a task
function removeTask(index) {
  initialTasks.splice(index, 1);  // Remove task from the array
  renderTasks();                  // Re-render the task list
}