const addTask = document.querySelector('.app__button--add-task');
const cancelTask = document.querySelector('.app__form-footer__button--cancel');
const form = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const taskList = document.querySelector('.app__section-task-list');
let taskLocalStorage = JSON.parse(localStorage.getItem('tasks')) || [];
const pTaskDoing = document.querySelector('.app__section-active-task-description');

const btnRemoverConcluidas = document.querySelector('#btn-remover-concluidas')
const btnRemoverTodas = document.querySelector('#btn-remover-todas')

let taskSeleted = null;
let listItemTaskSeleted = null;

addTask.addEventListener('click', () =>{
    form.classList.toggle('hidden');
});

cancelTask.addEventListener('click', () =>{
    cancelAddTask();
});


form.addEventListener('submit', (event =>{
    event.preventDefault();
    const task = {
        description: textArea.value
    };
    taskLocalStorage.push(task);
    refreshTask();
    setInsertElement(task);
    textArea.value = null;
    form.classList.toggle('hidden'); 
}));

if(taskLocalStorage.length > 0){
    taskLocalStorage.forEach(task => {
        setInsertElement(task);
    });
}

function editDescription(task, paragraph){
    //debugger
    const newDescription = prompt("Qual é o novo nome da tarefa?")    
    if (newDescription) {            
        paragraph.textContent = newDescription
        task.description = newDescription
        refreshTask();
    }
}

function setDescriptionTask(task, li){
    removeTaskActive();
    if(taskSeleted == task){
        taskSeleted= null;
        li=null;
        pTaskDoing.textContent = null;        
        return;
    }
    taskSeleted = task;
    listItemTaskSeleted = li;
    pTaskDoing.textContent = task.description;
    li.classList.add('app__section-task-list-item-active');
}

function removeTaskActive(){
    const listTaskActive = document.querySelectorAll('.app__section-task-list-item-active');
    listTaskActive.forEach(element => {
        element.classList.remove('app__section-task-list-item-active');    
    });
}

function refreshTask(){
    localStorage.setItem('tasks', JSON.stringify(taskLocalStorage));
}

function setInsertElement(task){
    const elementTask = createElementTask(task);
    taskList.appendChild(elementTask);
}

function createElementTask(task){
    // Criar elementos
    const listItem = document.createElement('li');
    const svg = document.createElement('svg');
    //adicionando html element
    svg.innerHTML = `            
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    `;

    const descriptionParagraph = document.createElement('p');
    const editButton = document.createElement('button');

    editButton.onclick = () => {
        editDescription(task, descriptionParagraph);
    };

    const editImg = document.createElement('img');

    // Adicionar classes e atributos
    listItem.classList.add('app__section-task-list-item');
    descriptionParagraph.classList.add('app__section-task-list-item-description');
    editButton.classList.add('app_button-edit');
    editImg.setAttribute('src', './imagens/edit.png');

    // Definir texto do parágrafo de descrição
    descriptionParagraph.textContent = task.description;

    // Construir a estrutura do elemento    
    listItem.appendChild(svg);
    listItem.appendChild(descriptionParagraph);
    editButton.appendChild(editImg);
    listItem.appendChild(editButton);

    if(task.done){
        fishedTask(listItem);
    }else{
        listItem.onclick = () => {
            setDescriptionTask(task, listItem);
        };
    }
    return listItem;
}

function cancelAddTask(){
    textArea.value = null;
    form.classList.toggle('hidden'); 
}

function fishedTask(elementTask){
    elementTask.classList.remove('app__section-task-list-item-active');
    elementTask.classList.add('app__section-task-list-item-complete');
    elementTask.setAttribute('disabled', 'disabled');
    elementTask.querySelector('button').setAttribute('disabled', 'disabled');
    elementTask.onclick = null;
}

document.addEventListener('FocoFinalizado', () => {
    if(taskSeleted && listItemTaskSeleted){
        fishedTask(listItemTaskSeleted)
        pTaskDoing.textContent = null;
        taskSeleted.done = true;
        refreshTask();
    }

});

const removerTarefas  = (somenteCompletas) => {    
    let seletor =  ".app__section-task-list-item"
    if (somenteCompletas) {
        seletor = ".app__section-task-list-item-complete"
    }
    document.querySelectorAll(seletor).forEach(elemento => {
        elemento.remove()
    })
    taskLocalStorage = somenteCompletas ? taskLocalStorage.filter(tarefa => !tarefa.done) : []
    refreshTask()
}


btnRemoverConcluidas.onclick = () => removerTarefas(true)
btnRemoverTodas.onclick = () => removerTarefas(false)