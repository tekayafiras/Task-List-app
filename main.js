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

    input.value='';
    if(task !== ''){
        create(task);
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


body.addEventListener('click',function(e){

    if(e.target.classList.contains('remove')){
        e.target.parentElement.remove();
    }
});

clear.addEventListener('click',function(e){
    e.preventDefault();
    const li = document.querySelectorAll('li')
    
    li.forEach(function(current){
        current.remove();
    })
    
});



   


