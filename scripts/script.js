let tasksCount = $(`.tasksCount`);
let zeroStateMessage = `No Tasks Yet`;
let tasksContainer = $(`.tasksContainer`);

let storedTasks = localStorage.getItem(`tasks`);
let tasksArray = JSON.parse(storedTasks) || [];

const addTaskJQ = () => {
    let taskName = prompt(`Enter Task Name`);

    let newTaskObj = {
        name: taskName,
        id: tasksArray.length + 1,
    }

    addTaskToScreen(taskName);
    tasksArray.push(newTaskObj);
    if (tasksCount) tasksCount.html(`(${tasksArray.length})`);
    localStorage.setItem(`tasks`, JSON.stringify(tasksArray));
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
        if (tasksContainer.html() == zeroStateMessage) {
            tasksContainer.html(``);
        }
        tasksContainer.append(taskElement);
    }
}

const initializeToDoListApp = () => {
    if (tasksArray.length > 0) {
        if (tasksCount) tasksCount.html(`(${tasksArray.length})`);
        tasksArray.forEach(taskInArray => addTaskToScreen(taskInArray.name));
    } else {
        tasksContainer.html(zeroStateMessage);
    }
}

initializeToDoListApp();