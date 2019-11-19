console.log("Hello from src/index.js yoyp!");
const list = document.querySelector('ul#players');
// const list = document.getElementById('players');

list.insertAdjacentHTML('beforeend', '<li>Anakin</li>');
list.insertAdjacentHTML('beforeend', '<li>Miguel</li>');
// console.log(list);

list.style.display = 'none';


const winners = document.querySelectorAll('#fifa-wins > li');
// console.log(winners);

// How can i display the text inside each li element
winners.forEach((winner) => {
  console.log(winner.innerText);
})

const winnersList = document.getElementById(
  'fifa-wins');
winnersList.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>')
winnersList.style.display = 'none';





// EVENTS
// I have an image square(INPUT)
// i want to have it rounded(OUTPUT) when i click(EVENT)


  // 1. When i click on the image of romain, i want it to become rounded.

  // 2. When i click on one image of all the images, I want it to become rounded.

  const images = document.querySelectorAll('img')

  // console.log(images);


// const images = document.querySelectorAll('img')
// // console.log(images)

// images.forEach((image) => {
//   image.addEventListener('click', (event) => {
//   // console.log(event); //mouseevent
//   // console.log(event.currentTarget);
//   debugger
//   event.currentTarget.classList.add('rounded');
//   });
// });

// 3. CODE REFACTORED with extracting the callback function.

  debugger
const imageToggler = (event) => {
  event.currentTarget.classList.toggle('rounded');
}

images.forEach((image) => {
  // The event listener still creates the event argument
  // The receiving function sends it forwards
  image.addEventListener('click', imageToggler);
})






























