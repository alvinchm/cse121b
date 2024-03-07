/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = `Alvin Chino` ;
let currentYear = new Date().getFullYear();
var profilePicture = (`images/foto.jpeg`); 
/* Step 3 - Element Variables */
const nameElement = document.getElementById(`name`);
const foodElement = document.getElementById(`food`);
const yearElement = document.querySelector(`#year`);
const imageElement = document.querySelector(`img`);

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent= currentYear;
imageElement.setAttribute(`src`,profilePicture);
imageElement.setAttribute(`alt`,"Profile name of "+(fullName));
/* Step 5 - Array */
var favoriteFood = ["Rice","Chicharron","Fricase","Milanesa","Sajta","Hamburguer"];
foodElement.innerHTML= favoriteFood;
var oneFood = "Fried Chicken";
favoriteFood.push(oneFood);
foodElement.innerHTML += `<br>${favoriteFood} `;
favoriteFood.shift();
foodElement.innerHTML += `<br> ${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML += `<br> ${favoriteFood}`;

