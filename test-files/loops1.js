let myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
let list = document.createElement('ul');

for (let i =0; i < myArray.length; i++){
    let li = document.createElement('li');
    list.appendChild(li);
    li.textContent = myArray[i]; 
}

const section = document.querySelector('section');
section.appendChild(list);


let paraPhone = document.querySelector('.phonebook');
let nameInput = document.querySelector('#namesearch');
let namebtn = document.querySelector('#namebtn');
let p = document.createElement('p');


let phonebook = [
    { name : 'Chris', number : '1549' },
    { name : 'Li Kang', number : '9634' },
    { name : 'Anne', number : '9065' },
    { name : 'Francesca', number : '3001' },
    { name : 'Mustafa', number : '6888' },
    { name : 'Tina', number : '4312' },
    { name : 'Bert', number : '7780' },
    { name : 'Jada', number : '2282' },
]

namebtn.addEventListener('click', function () {
    let name = nameInput.value.toLowerCase();
    let i = 0;
    while(i < phonebook.length) {
        if(name === phonebook[i].name.toLowerCase()) {
            paraPhone.appendChild(p);
            p.textContent = `${phonebook[i].name}'s phone number is ${phonebook[i].number}`;
            break; 
        } else {
            i++
       }
    paraPhone.appendChild(p);
    p.textContent = `There is no ${name}, in phonebook.`;
    }
})

/**
 * Loops 3
 */

let paraNum = document.querySelector('.paraNum');
let numInput = document.querySelector('#numInput');
let numBtn = document.querySelector('#numBtn');

// inputnum = 500; 
// 
numBtn.addEventListener('click', function() { 
    let num = parseInt(numInput.value); 
    let p = document.createElement('p');
    paraNum.appendChild(p); 
    do {
        if(isPrime(num) === true){
            p.textContent += `${num}, `;              
        } else {
            //do nothing 
        }
        num--; // iterate over next 
    } while (num >=2){   
    return p.textContent = p.textContent.slice(0,-2) + '.';
    }
})

function isPrime(num) {
    if(num === 2){
        return true;
    } else {
        for (let i = 2; i < num; i++){
            if (num % i === 0){
                return false;      
            } 
            else continue;
        } 
        return true; 
    }
}

function getEven(num) {
   
    for(let i =0 ; i <= num; i++){
        if(i % 2 == i){
            console.log(i); 
        }
    } 
}
let para3 = document.querySelector('.input');
let input = document.querySelector('#greaterInput');

input.addEventListener('click', function(){
    let num;
    do {
         num = parseInt(prompt('Enter num greater than 100'));
    } while (num <= 100 || num === null)
   if (num >100)alert(num); 

})