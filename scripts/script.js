let tasksContainer = document.querySelector(`.tasksContainer`);

tasksContainer.innerHTML = `No Tasks Yet`;

const addTask = (event) => {
    let taskName = prompt(`Enter Task Name`);
    if (taskName) {
        let taskElement = document.createElement(`div`);
        let taskCheckbox = document.createElement(`input`);
        let taskNameElement = document.createElement(`span`);
        let taskActionsElement = document.createElement(`div`);
        let taskEditButton = document.createElement(`button`);
        let taskDelButton = document.createElement(`button`);

        taskElement.className = `task`;
        taskCheckbox.type = `checkbox`;
        taskCheckbox.name = `taskComplete`;
        taskNameElement.innerHTML = taskName;
        taskNameElement.className = `taskName`;
        taskActionsElement.className = `actions`;
        taskEditButton.className = `edtBtn actionBtn`;
        taskDelButton.className = `delBtn actionBtn`;
        taskEditButton.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
        taskDelButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

        taskElement.append(taskCheckbox);
        taskElement.append(taskNameElement);
        taskActionsElement.append(taskEditButton);
        taskActionsElement.append(taskDelButton);
        taskElement.append(taskActionsElement);

        if (tasksContainer) {
            if (tasksContainer.innerHTML == `No Tasks Yet`) {
                tasksContainer.innerHTML = ``;
            }
            tasksContainer.append(taskElement);
        }
    }
}