let tasksContainer = $(`.tasksContainer`);

tasksContainer.html(`No Tasks Yet`);

const addTaskJQ = (event) => {
    let taskName = prompt(`Enter Task Name`);
    let taskElement = $(`
        <div class="task">
            <input type="checkbox" name="taskComplete">  
            <span class="taskName">${taskName}</span>
            <div class="actions">
                <button class="edtBtn actionBtn"> 
                    <i class="fa-solid fa-pencil"></i>
                </button>
                <button class="delBtn actionBtn"> 
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>    
    `);

    if (tasksContainer) {
        if (tasksContainer.html() == `No Tasks Yet`) {
            tasksContainer.html(``);
        }
        tasksContainer.append(taskElement);
    }
}

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