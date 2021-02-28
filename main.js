const form = document.querySelector('form');
const input = document.querySelector('.firstinput');
const ul = document.querySelector('ul');

const body = document.querySelector('body')
const clear = document.querySelector('.clear');

/* get the data from input */
form.addEventListener('submit',function(e){

    e.preventDefault();
    const task = input.value;

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks =[];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));

    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks))
    const data = localStorage.getItem('tasks');
    console.log(data)
    

    input.value='';
    if(task !== ''){
        create(task);
    }
    else{
        alert('add task')
    }
    
    
})


/* create new element */

function create(script){
    const newLi = document.createElement('li');
    const newP = document.createElement('p');
    const newI = document.createElement('i');

    newI.className = 'fas fa-times remove';
    newP.innerHTML=`${script}`;

    newLi.appendChild(newP)
    newLi.appendChild(newI)
    ul.appendChild(newLi)
}

/*remove list item */

body.addEventListener('click',function(e){

    if(e.target.classList.contains('remove')){
        if(confirm(alert('are you sure !!')))
        e.target.parentElement.remove();
    }

    /*remove from local storage only removed from UI*/

    removeTaskFromLocalStorage(e.target.parentElement);

});

function removeTaskFromLocalStorage(taskItem){
    
    if(localStorage.getItem('tasks') === null){
        tasks =[];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));

    }
    tasks.forEach(function(task,index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1)
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks))
}


/*remove all */

clear.addEventListener('click',function(e){
    e.preventDefault();
    const li = document.querySelectorAll('li');
    localStorage.clear();
    li.forEach(function(current){
        current.remove();
    })

    

});



/*filter task */
const secondInput = document.querySelector('.second-input');

secondInput.addEventListener('keyup',function(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('li').forEach(function(current){
        if(current.firstChild.textContent.toLowerCase().indexOf(text) != -1){
            current.style.display = 'flex';
        }else{
            current.style.display = 'none';
        }
        
    })

   
})

/* get task from local storage when loaded */ 

document.addEventListener('DOMContentLoaded',function(e){
    if(localStorage.getItem('tasks') === null){
        tasks =[];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));

    }
    tasks.forEach(function(task){
        const newLi = document.createElement('li');
        const newP = document.createElement('p');
        const newI = document.createElement('i');

        newI.className = 'fas fa-times remove';
        newP.innerHTML=`${task}`;

        newLi.appendChild(newP)
        newLi.appendChild(newI)
        ul.appendChild(newLi)
    })
})

