class Cat {
  name;
  breed;
  color;
  constructor(name, breed, color){
    this.name = name; 
    this.breed = breed; 
    this.color = color; 
  }
  greeting(){
    console.log(`Hello says,${this['name']} the ${this['breed']}.`)
  }
}

let cat1 = new Cat('Bertie','Cymric','white');
let cat2 = new Cat('Linda', 'CommonHouse', 'black')

let band = {
  name: 'Reik', 
  nationality: 'Mexico',
  genre: 'Pop Rock', 
  members: 3, 
  formed: 2005, 
  split: false, 
  albums: [{name: 'primero', released: 2005,},{name:'segundo', released: 2007,},{name:'tercero', released: 2009,}],
}

let bandInfo = `The band is name ${band['name']} originally from ${band['nationality']}, and was formed in ${band['formed']} and are still active.
Their genre is ${band['genre']} with their first album titled ${band["albums"][0].name} being released in ${band['albums'][0].released}`;

const section = document.querySelector('section');
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = cat1.greeting(); 
para2.textContent = cat2.greeting();

section.appendChild(para1);
section.appendChild(para2);