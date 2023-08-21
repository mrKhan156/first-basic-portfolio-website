const creatTaskForm = document.querySelector('form');

creatTaskForm.addEventListener('submit', (e)=>{
    e.preventDefault()
   const elements = e.target.elements;

   const task = {};
   [...elements].forEach(el =>{
    if(el.name){
        task[el.name] = el.value;
    }
   });
   task.id = Math.floor(Math.random() * 10000 + 1000) + Date.now()
  addLocal(task);
})

function getLocal(key ='tasks'){
let tasks = []; 
tasks = JSON.parse(localStorage.getItem(key)) || [];
return tasks;
}

function addLocal(task){
    const tasks = getLocal();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks))
}
function displayTask (){
    const tasks = getLocal();
    const tr =document.createElement('tr');
    tr.innerHTML = `
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    
    `

}