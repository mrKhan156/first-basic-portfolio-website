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