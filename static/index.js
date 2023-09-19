// Array para armazenar as tarefas
let tasks = [];

// Função para adicionar uma tarefa à lista
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push(taskText);
        taskInput.value = "";
        displayTasks();
    }
}

// Função para exibir as tarefas na lista
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        // Criar um item de lista com um botão "Remover"
        const listItem = document.createElement("li");
        listItem.textContent = task;
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.addEventListener("click", () => removeTask(i)); // Chama a função removeTask com o índice da tarefa

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }
}

// Função para remover uma tarefa
function removeTask(index) {
    tasks.splice(index, 1); // Remove a tarefa do array pelo índice
    displayTasks(); // Atualiza a lista de tarefas exibida
}

// Chamar a função displayTasks inicialmente para exibir as tarefas existentes
displayTasks();
