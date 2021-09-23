// const div = document.querySelector('div');
// const ul = document.querySelector('ul');
// const input = document.querySelector('input')
// const button = document.querySelector('button'); 

// button.onclick = function () {
//   let inputValue = input.value;
//   input.value = ' ';
//   let listItem = document.createElement('li');
//   let listText = document.createElement('span');
//   let listBtn = document.createElement('button');

//   listItem.appendChild(listText); 
//   listText.textContent = inputValue;
//   listItem.appendChild(listBtn);
//   listBtn.textContent = 'Delete';

//   ul.appendChild(listItem);

//   listBtn.onclick = function() {
//     ul.removeChild(listItem);
//     input.focus();
//   }
//   input.focus();
// } 

const body = document.querySelector('body'); 
const para = document.createElement('p');
para.textContent = `Hey I'm red!`;
para.style.color = 'red'; 

const h3 = document.createElement('h3');
h3.textContent = `I'm a blue h3`; 
h3.style.color = 'blue'; 

body.append(para, h3)

const parentDiv = document.createElement('div');
parentDiv.style.borderColor = 'black';
parentDiv.style.backgroundColor= 'pink'; 
const h1 = document.createElement('h1'); 
h1.textContent = `I'm in a div`; 

const childPara = document.createElement('p'); 
childPara.textContent = `ME TOO!`; 

parentDiv.append(h1, childPara);
body.appendChild(parentDiv); 


const buttons = document.querySelectorAll('button'); 

buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(`The button id is:  ${button.id}`)
  })
})
  // function forEach(func) {
    //     for (let item of this.array) {
    //         func(item);
    //     }
    // }


