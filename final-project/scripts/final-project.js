const recipeElement = document.getElementById('recipe');
let numRecipes = 10;
const recipes = [];

function fetchRecipe() {
  return fetch('https://foodish-api.com/api/')
    .then(response => response.json())
    .then(data => data.image);
}

function displayRecipes() {
  recipeElement.innerHTML = '';
  recipes.forEach(recipe => {
    const img = document.createElement('img');
    img.src = recipe;
    img.alt = 'Random Recipe';
    recipeElement.appendChild(img);
  });
}
async function getRecipes() {
    for (let i = 0; i < numRecipes ; i++) {
        const recipe = await fetchRecipe();
        recipes.push(recipe);
    }
    displayRecipes();
}
const reset = () => {
    while (recipeElement.firstChild){
        recipeElement.removeChild(recipeElement.firstChild);
    }
    
};

const filterRecipes = (recipes) => {
    reset();
    
    const filter = document.getElementById(`numRecipes`).value;
    
    switch (filter) {
        case `1`:
            displayRecipes(recipes.filter(recipes => recipes === `1`));
        break;
        case `2`:
            displayRecipes(recipes.filter(recipes => recipes === `2`));
        break;
        case `3`:
            displayRecipes(recipes.filter(recipes => recipes ===`3`));
        break;
        case `all`:
        default:
            displayRecipes(recipes);
        break;
    }
};
                    

getRecipes();
document.querySelector(`#numRecipes`).addEventListener(`change`, () => {filterRecipes(numRecipes)});