const creatTaskForm = document.querySelector('form');
const tBody = document.querySelector('tbody');
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
    // displayTask()
}

//display task function
function displayTask(){
    const tasks = getLocal();
    tBody.innerHTML=''
    tasks?.reverse()?.map(({name, email, phone, address,id},index)=>{
      
        const tr =document.createElement('tr');
       tr.id = `id_${id}`;
    tr.innerHTML = `
    <td>${index + 1}</td>
    <td class="name">${name}</td>
    <td class="email">${email}</td>
    <td class="phone">${phone}</td>
    <td class="address">${address}</td>
    <td class="btn action">
    <button class="dlt_btn "  onclick='deleteTask(${id})'><i class="fa-solid fa-trash-can"></i></button>
    <button class="edt_btn" onclick='editTask(${id})' ><i class="fa-regular fa-pen-to-square"></i></button>
    </td>
    
    `;
    tBody.append(tr)
    })

}

displayTask()

//delete data section
function deleteTask(id){
   const tasks = getLocal()
   const newTask = tasks.filter(task =>{
    if(task.id !== id){
        return true;
    }
    else{
        return false;
    }
   })

   localStorage.setItem("tasks", JSON.stringify(newTask))
   displayTask()
}

//edit task section
function editTask(id){
   const tr = document.querySelector(`#id_${id}`);
   //for name
  const nameEl = tr.querySelector('.name');
  const name = nameEl.textContent;

  const nameInput = document.createElement('input');
  nameInput.value = name;
nameEl.innerHTML = '';
nameEl.appendChild(nameInput)

   //for email
  const emailEl = tr.querySelector('.email');
  const email = emailEl.textContent;
  const emailInput = document.createElement('input');
  emailInput.value = email;
emailEl.innerHTML = '';
emailEl.appendChild(emailInput)
   //for phone
  const phoneEl = tr.querySelector('.phone');
  const phone = phoneEl.textContent;
  const phoneInput = document.createElement('input');
  phoneInput.value = phone;
phoneEl.innerHTML = '';
phoneEl.appendChild(phoneInput)
   //for address
  const addressEl = tr.querySelector('.address');
  const address = addressEl.textContent;

  const addressInput = document.createElement('input');
  addressInput.value = address;
addressEl.innerHTML = '';
addressEl.appendChild(addressInput)


   //for action
   const actionEl = tr.querySelector('.action');
   const actionButton = actionEl.innerHTML;
   const saveBtn = document.createElement('button');

   saveBtn.classList.add('edt_btn');
   saveBtn.onclick = function(){
    const newName = nameInput.value;
    const newEmail = emailInput.value;
    const newPhone = phoneInput.value;
    const newAddress = addressInput.value;
   
    const tasks = getLocal()
    const newTask = tasks.map(task =>{
     if(task.id === id){
       return {
        ...task,
        name:newName,
        email:newEmail,
        phone:newPhone,
        address:newAddress
       }
     }
     else{
         return task;
     }
    })
 
    localStorage.setItem("tasks", JSON.stringify(newTask))
    displayTask()
   }
   saveBtn.innerHTML = `<i class="fa-solid fa-sd-card"></i>`
   actionEl.innerHTML = '';
   actionEl.appendChild(saveBtn)
   

}










// quotes section starts

let btn = document.querySelector('#new_quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.persons');

const quotes  = [
    {
        quote:`"I am not afraid of storms, for I am learning how to sail my ship."`,
        person:`"Louisa May Alcott"`
    },
    {
        quote:`"“To choose doubt as a philosophy of life is akin to choosing immobility as a means of transportation”"`,
        person :`"Yann Martel"`
    },

    {
        quote:`"Tomorrow is always fresh, with no mistakes in yet."`,
        person :`" Lucy Maud Montgomery"`
    },

    {
        quote:`"It’s the possibility of having a dream come true that makes life interesting."`,
        person :`"Paulo Coelho"`
    }
,
    {
        quote:`"Nothing in the world is ever completely wrong. Even a stopped clock is right twice a day."`,
        person :`"Paulo Coelho"`
    },
    {
        quote:`"I have learned to seek my happiness by limiting my desires, rather than in attempting to satisfy them."`,
        person :`"John Stuart Mill"`
    },
    {
        quote:`"Life is not a problem to be solved but a reality to be experienced."`,
        person :`"Søren Kierkegaard"`
    },
    {
        quote:`"No man ever steps in the same river twice, for it’s not the same river and he’s not the same man."`,
        person :`"Heraclitus"`
    },
    {
        quote:`"No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind."`,
        person :`"Taylor Swift"`
    },
    {
        quote:`"Almost everything will work again if you unplug it for a few minutes, including you."`,
        person :` "Anne Lamott"`
    },
];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length );

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
// quotes section ends

//stopWatch section starts
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;

// variables for zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;
//variables for interval

let timerInterval = null;
let timerStatus = "stopped"

//stop watch function
function stopWatch(){


    seconds ++
    if(seconds/60 ===1){
        seconds = 0;
        minutes ++;
        if(minutes/60 === 1){
            minutes = 0;
            hours ++;
        }
    }

    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    } else{
        leadingSeconds = seconds ;
    }
    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    } else{
        leadingMinutes = minutes ;
    }
    if(hours<10){
        leadingHours = "0" + hours.toString();
    } else{
        leadingHours = hours ;
    }

    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}
//  
startStopBtn.addEventListener('click',function(){

if(timerStatus === "stopped"){

    timerInterval= window.setInterval(stopWatch,1000);

    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;

    timerStatus = "started";
} else{
    window.clearInterval(timerInterval);
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-regular fa-circle-play" id="play"></i>`;
    timerStatus="stopped";
}
});

resetBtn.addEventListener('click',function(){
window.clearInterval(timerInterval);
seconds = 0;
minutes = 0;
hours = 0;
document.getElementById('timer').innerHTML = "00:00:00";
});
//stopWatch section ends