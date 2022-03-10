
//Function 1  & 3 after improving function 
  let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
  let para = document.createElement('p');  

  function random(min,max) {
      return randomNum = Math.floor(Math.random()* (max-min) + (min)
       )
      
  }
  function chooseName () {
      return randomName = names[random(0,names.length)];
       
  }

    chooseName(); 

    para.textContent = chooseName(); 
  
    const section = document.querySelector('section');
    section.appendChild(para);

    chooseName();
  // Function 2
  
  let canvas = document.querySelector('canvas');
  let para2 = document.createElement('p');
  let ctx = canvas.getContext('2d');
  let x = 50;
  let y = 60;
  let width = 100;
  let height = 75;
  let color = 'olive';
  function draw() {
          ctx.beginPath(); 
          ctx.fillStyle = color; 
          ctx.fillRect(x,y,width,height);
      
  }     
  draw();
  // Need clear canvas before drawing? So when 
  // code is updated in the case of the live version
  // you don't get lots of rectangles drawn on top of one another. --- currently drawing on top of each other. 

  const section2 = document.querySelector('section');

  const para3 = document.querySelector('.para3')
  const speed = document.querySelector('#speed');
  const distance = document.querySelector('#distance');
  

  speed.onchange = function() {
    calcTime();
    distance.focus();
  };
  
  distance.onchange = function() {
    calcTime()
  };

  function calcTime() {
    let speedVal = speed.value; 
    let distanceVal = distance.value; 
    let time;
    if (distanceVal === '' || speedVal === '') {
      time = null;
    } else {
      time = (distanceVal/speedVal) * 60; 
    }
    para3.textContent = 'Travel time is ' + time + ' minutes.';
  }

  let powerOf = document.querySelector('.powerOf');
  let calcButton = document.querySelector('#calcButton'); 
  let para4 = document.createElement('p');

  calcButton.onclick = function() {
    let someX = prompt('what is x');
    let someN = prompt('what is N');
    let result = someX ** someN; 
    powerOf.appendChild(para4);
    return para4.textContent =`${someX} ** ${someN} =  ${result}`;
  } 

  let ageInput = document.querySelector('#age');

  function ageUnder() {
    alert('Need to be 18 to create account');
  }

  function ageOver() {
    alert('Welcome!');
  }

  ageInput.onchange = function () { 
    ageInput.value < 18 ? ageUnder() : ageOver(); 
  }


  function add7(num) {
    return num + 7; 
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }

  function capitalize(string) {
    let firstChar = string.charAt([0]);
    let capFirstChar = firstChar.toUpperCase(); 
    let lowerCaseString = string.toLowerCase(); 
    return console.log(combinedString = capFirstChar + lowerCaseString.slice(1,))
  }

function lastLetter(string) {
  return string.slice(-1);
} 



  let fizzInput = document.querySelector('#fizzbuzz');
  let para5 = document.createElement('p');
  let div5 = document.querySelector('.divForFizz');

  

  fizzInput.onchange = function() {
    let num = fizzInput.value;  
    printNum(num);
    div5.appendChild(para5);
    return para5.textContent = `${printNum(num)}`;
  }

  function printNum(num){
    for (let i = 1; i <= num; i++) {
      if( (i % 3 === 0) && (i % 5 === 0)) {
        console.log('fizz buzz'); 
      } else if (i % 3 === 0){
        console.log('fizz');
      } else if ( i % 5 === 0 ) {
        console.log('buzz');
      } else {
        console.log(i);
      }
    }
  }

  //Pseudo code Problem - 
    
  let callCounter = 0;
    function downUp(string){
      callCounter++;
      if (string.length === 1) {
        console.log(callCounter, string);
      } else {
        console.log(callCounter, string)
        downUp(string.substring(string.length -1, string))
        console.log(callCounter, string);
      }
      callCounter--
    }

    
// When faced w/ TypeError -- think of the data type you are trying got run a method or operation on. 
// reference something that doesnt exist -> ReferenceError: is not defined
// read property of `undefined` or `null` -> TypeError: cannot read property of
// call something that is not a function -> TypeError: is not a function
// code run is not written correctly -> SyntaxError: invalid/ illegal or unexpected toke


//Tips for Resolving Errors 
      // 1. Read error carefully... try to understand on your own. 
      // 2. Next, Google error! if nothing else will clarify as to why throwing that error. 
      // 3. Use debugger! -- Lets you set breakpoints - view the value of any given variable at a specific 
      //     point in your applications execution 
      

// only finds's for exact name -- what if you want to filter if it has some similar char 
// and return //no exact match found, and provide similar matches like ex. SEarch for Chri
// return no contact by dthat name, similar are chris 


    // function map(func) {
    //     let result = [];
    //     this.array.forEach(item => {
    //         let mappedItem = func(item);
    //         result.push(mappedItem);
    //     });
    //     return result;
    // }


    // function find(func) {
    //     let result = undefined;
    //     this.array.forEach(item => {
    //         if (func(item)) {
    //             result = item;
    //             break;
    //         }
    //     });
    //     return result;
    // }

    // function forEach(func) {
    //     for (let item of this.array) {
    //         func(item);
    //     }
    // }

    // let result = null;
    // contacts.forEach(contact => {
    //     let splitContact = contact.split(':');
    //     if (splitContact[0].toLowerCase() === name) {
    //         result = contact;
    //         break;
    //     }
    // })

    // function filter(func) {
    //     let result = [];
    //     this.array.forEach(item => {
    //         if (func(item)) {
    //             result.push(item);
    //         }
    //     });
    //     return result;
    // }


//Active Learning  - Launch Countdown
// let para = document.querySelector('#midCont');
// let input = document.querySelector('input');
// let button = document.querySelector('#searchbutton'); 
// let para2 = document.createElement('p')
// const rawContacts = ['Chris:2323432323', 'Ana:2123423543', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975']
// const contacts = rawContacts.map(contactString => {
//     let [contactName, contactPhone] = contactString.split(':');
//     return {
//         name: contactName,
//         phone: contactPhone
//     }
// });


// button.addEventListener('click', function () {
//     let searchName = input.value;
//     let contact = findContact(searchName);
//     let message = contact 
//         ? `${contact.name}'s phone number is ${contact.phone}`
//         : `Contact not found, for ${searchName} `;
//     para2.textContent = message;
//     para.appendChild(para2);
// });

// /**
//  * .find
//  * @param {*}
//  * @returns 
//  */
// function findContact(name) {
//     name = name.toLowerCase();
//     return contacts.find(contact => contact.name.toLowerCase() === name);
// }
