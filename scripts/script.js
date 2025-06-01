let storedTasks = localStorage.getItem(`tasks`);
let tasks = JSON.parse(storedTasks) || [];
let tasksContainer = $(`.tasksContainer`);

const addTaskJQ = () => {
    let taskName = prompt(`Enter Task Name`);

    let newTaskObj = {
        name: taskName,
        id: tasks.length + 1,
    }

    tasks.push(newTaskObj);
    addTaskToScreen(taskName);

    localStorage.setItem(`tasks`, JSON.stringify(tasks));
}

const addTaskToScreen = (name) => {
    let taskElement = $(`
        <div class="task">
            <input type="checkbox" name="taskComplete">  
            <span class="taskName">${name}</span>
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

if (tasks.length > 0) {
    tasks.forEach(tsk => {
        addTaskToScreen(tsk.name);
    })
} else {
    tasksContainer.html(`No Tasks Yet`);
}