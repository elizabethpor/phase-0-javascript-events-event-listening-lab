//3 ways of doing the same thing:

//1. the callback function is spelled out as a paramenter of the higher function
// I used an arrow function as callback function
function addingEventListener() {
  const input = document.getElementById('input');
  input.addEventListener('click', () => alert('I was clicked!'));
};
addingEventListener();


//2. the callback function is spelled out as a paramenter of the higher function
// I used a regular anonymous function as callback function
//function addingEventListener() {
// const input = document.getElementById('input');
// input.addEventListener('click', function() {
//   alert('I was clicked!');
// };
//addingEventListener();


//3. the callback function is separate from the higher function
// I used a regular function named clickAlert as callback function
// function addingEventListener() {
//   const input = document.getElementById('input');

// function clickAlert() {
// alert('I was clicked!');
// }

// input.addEventListener('click', clickAlert);
// }
// addingEventListener();