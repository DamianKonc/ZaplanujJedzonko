const recipeKey = "localRecipes";

// Na samym początku musi to być pusta tablica, aby można było używać push()
function initiationLocalStorageRecipes() {
    if (!window.localStorage.getItem(recipeKey)) {
        window.localStorage.setItem(recipeKey, "[]");
    }
}

function saveOneRecipeToLocalStorage(recipe) {
    window.localStorage.getItem(recipeKey);
    let recipesList = JSON.parse(window.localStorage.getItem(recipeKey));
    recipesList.push(recipe);
    window.localStorage.setItem(recipeKey, JSON.stringify(recipesList));
}

function deleteOneRecipeFromLocalStorage(recipeId) {
    let recipesList = JSON.parse(window.localStorage.getItem(recipeKey));
    let filteredList = recipesList.filter(function (el) {
        return el.id !== Number.parseInt(recipeId);

    });
    window.localStorage.setItem(recipeKey, JSON.stringify(filteredList));
}

function getAllRecipesFromLocalStorage() {
    return JSON.parse(window.localStorage.getItem(recipeKey));
}

function getNewIdForNewRecipe() {
    let idArray = getAllRecipesFromLocalStorage().map((el) => {
        return el.id;
    });

    let maxId = Math.max(...idArray);
    console.log(maxId);
    if (maxId === -Infinity || !maxId) {
        maxId = 0;
    }
    return maxId + 1;
}

function getNumberOfRecipes() {
    return getAllRecipesFromLocalStorage().length;
}

export {
    initiationLocalStorageRecipes,
    saveOneRecipeToLocalStorage,
    deleteOneRecipeFromLocalStorage,
    getAllRecipesFromLocalStorage,
    getNewIdForNewRecipe,
    getNumberOfRecipes
}