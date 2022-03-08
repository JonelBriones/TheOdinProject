const container = document.querySelector('#container');

// creates an html element
const content = document.createElement('div');
content.classList.add('content');
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const red = document.createElement('p');
red.classList.add('red');
red.textContent = "Hey i'm red";
red.style.color ="red";
container.appendChild(red);

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = "I'm a blue h3";
container.appendChild(h3);
h3.style.color ="blue";

const div = document.createElement('div');
// div.appendChild(h1);
div.classList.add('div');
div.style.cssText = "backgrond-color: pink";
div.style.cssText = "border: 6px solid black";
const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = "I'm in a div";
const p = document.createElement('p');
p.classList.add('p');
p.textContent = "ME TOO!";
container.appendChild(div);

// when click it displays this message
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    alert("You clicked me!"); // alert message when clicked
    console.log(e.target); // shows the element in console
    e.target.style.background = 'blue'; // button background turns blue after clicked
  });

// If want to have many buttons with same action
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
// // we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

