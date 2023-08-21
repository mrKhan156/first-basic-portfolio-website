const creatTaskForm = document.querySelector('form');
const tBody = document.querySelector('tbody');
creatTaskForm.addEventListener('submit', (e)=>{
   
   const elements = e.target.elements;

   const task = {};
   [...elements].forEach(el =>{
    if(el.name){
        task[el.name] = el.value;
    }
   });
   task.id = Math.floor(Math.random() * 10000 + 1000) + Date.now()
  addLocal(task);
  e.target.reset()
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
    
    tasks?.map(({name, email, phone, address, work},index)=>{
      
        const tr =document.createElement('tr');
    tr.innerHTML = `
    <td>${index + 1}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td>${address}</td>
    <td>${work}</td>
    
    `;
    tBody.append(tr)
    })

}
displayTask();