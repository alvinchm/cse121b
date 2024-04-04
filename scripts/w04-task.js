/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : "Alvin Chino",
    photo : `images/foto.jpeg`,
    favoriteFoods:[
        "Rice",
        "Chicharron",
        "Fricase",
        "Milanesa",
        "Sajta",
        "Hamburguer"
    ],
    hobbies: [
        "volleyball", 
        "soccer", 
        "play videogames"
    ],
    placesLived: [],


};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: " La Paz, BO",
        length: "20 years"
    },
    {
        place : "Tegucigalpa, HND",
        length: "2 years" 
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector(`#name`).textContent = myProfile.name

/* Photo with attributes */
document.querySelector(`#photo`).setAttribute(`src`,myProfile.photo)
document.querySelector(`#photo`).setAttribute(`alt`,myProfile.name)
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food=> {
    let li = document.createElement(`li`);
    li.textContent = food;
    document.querySelector(`#favorite-foods`).appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement(`li`);
    li.textContent = hobbie;
    document.querySelector(`#hobbies`).appendChild(li);
});

/* Places Lived DataList */
`places.forEach(place=> {
    myProfile.placesLived.push(place);
});
console.log(myProfile.placesLived);`
myProfile.placesLived.forEach(placeLived=> {
    let dtElement = document.createElement(`dt`)
    dtElement.textContent = placeLived.place
    document.querySelector(`#places-lived`).appendChild(dtElement)
    let ddElement = document.createElement(`dd`)
    ddElement.textContent = placeLived.length
    document.querySelector(`#places-lived`).appendChild(ddElement) 

});
