const button = document.getElementById('btn');
const input = document.getElementById('item');
const task = document.getElementById('taskList');

function newTask(){
    const newTaskText = input.value;
    const newTask = document.createElement('li');
    newTask.textContent = newTaskText;
    task.append(newTask);
    input.value = "";

}

function checkTask(evt){
    if (evt.target.tagName === 'LI'){
        evt.target.classList.toggle('task')
    }
}
 
button.addEventListener('click', newTask);
task.addEventListener('click', checkTask);



