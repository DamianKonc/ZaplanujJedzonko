import {
    deleteOneRecipeFromLocalStorage,
    getAllRecipesFromLocalStorage,
    getNewIdForNewRecipe,
    initiationLocalStorageRecipes,
    saveOneRecipeToLocalStorage
} from "./localStorageService.js";

const recipesContainerList = document.getElementById("recipes__container_list");

class Recipe {
    constructor(id, name, description, instructionsArray, ingredientsArray) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.instructions = instructionsArray;
        this.ingredients = ingredientsArray;
    }
}


function setRequiredMethodsForManageRecipes() {
    initiationLocalStorageRecipes();

    getAllRecipesFromLocalStorage().forEach(function (el) {
        displayRecipeOnListView(el);
    })

    redirectToAddRecipeViewButton();
    setDeleteRecipeButton();
    submitNewRecipe();
    setAddInstructionButton();
    setAddIngredientsButton();
}

function displayRecipeOnListView(recipe) {

    const recipesAddedContainer = document.createElement("div");
    recipesAddedContainer.classList.add("recipes_added_container");
    if (!recipesContainerList) {
        return
    }
    recipesContainerList.appendChild(recipesAddedContainer);

    const recipesId = document.createElement("div");
    recipesId.classList.add("recipes__id");
    recipesId.innerText = recipe.id;
    recipesAddedContainer.appendChild(recipesId);

    const recipesName = document.createElement("div");
    recipesName.classList.add("recipes__name");
    recipesName.innerText = recipe.name;
    recipesAddedContainer.appendChild(recipesName);

    const recipesDescription = document.createElement("div");
    recipesDescription.classList.add("recipes__description");
    recipesDescription.innerText = recipe.description;
    recipesAddedContainer.appendChild(recipesDescription);

    const recipesAction = document.createElement("div");
    recipesAction.classList.add("recipes__action");
    recipesAddedContainer.appendChild(recipesAction);

    const editButton = document.createElement("button");
    editButton.innerText = "Edytuj";
    editButton.classList.add("button__edit");
    editButton.dataset.id = recipe.id;
    editButton.dataset.action = "recipe_edit";
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Kasuj";
    deleteButton.classList.add("button__delete");
    deleteButton.dataset.id = recipe.id;
    deleteButton.dataset.action = "recipe_delete";
    recipesAction.appendChild(editButton);
    recipesAction.appendChild(deleteButton);
}

function redirectToAddRecipeViewButton() {
    let buttonAddRecipe = document.getElementById("recipes__button__add__recipe");
    if (!buttonAddRecipe) {
        return;
    }
    buttonAddRecipe.addEventListener("click", function (event) {
        let urlOrigin = window.location.origin;
        let addRecipeUrl = urlOrigin + "/addRecipe.html"
        window.location = addRecipeUrl;
    })
}

function setDeleteRecipeButton() {
    let deleteButtons = document.querySelectorAll("#recipes__container_list .button__delete");
    let recipesContainerList = document.getElementById("recipes__container_list");
    if (!deleteButtons) {
        return;
    }

    if (!recipesContainerList) {
        return;
    }

    recipesContainerList.addEventListener("click", function (event) {
        console.log(event.target.dataset.id);
        if (!event.target.dataset.id) {
            return;
        }

        if (event.target.dataset.action === "recipe_delete") {
            deleteOneRecipeFromLocalStorage(event.target.dataset.id);
            removeAllChildNodes(recipesContainerList);
            getAllRecipesFromLocalStorage().forEach(function (el) {
                displayRecipeOnListView(el);
            });
        }
    })

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function setAddInstructionButton() {

    let buttonAddInstruction = document.getElementById("recipeAdd__addInstruction");
    let textareaInstruction = document.getElementById("recipeAdd__addInstruction_textarea");
    let recipeAddOorderList = document.getElementById("recipeAdd_orderList");

    if (!buttonAddInstruction) {
        return;
    }

    buttonAddInstruction.addEventListener("click", function (event) {
        event.preventDefault();
        console.log(textareaInstruction.value);
        const li = document.createElement("li");
        li.innerText = textareaInstruction.value;
        recipeAddOorderList.appendChild(li);
        textareaInstruction.value = "";
    })

}

function setAddIngredientsButton() {

    let buttonAddInstruction = document.getElementById("recipeAdd__addIngredients");

    if (!buttonAddInstruction) {
        return;
    }

    buttonAddInstruction.addEventListener("click", function (event) {
        event.preventDefault();
    })

}

function submitNewRecipe() {
    let submit = document.getElementById("addRecipe__form");
    if (!submit) {
        return;
    }

    submit.addEventListener("submit", function (event) {
        event.preventDefault();
        const result = {};

        // Iterujemy się po wszystkich elementach formularzu
        for (let el of event.currentTarget) {
            // jeżeli element ma atrybut name to dodaj pole (name) i wartość(pobraną z inputa) do obiektu result
            // brzydko jest zrobione dodanie wartości checkboxa. Kod, który to robi powinien być koło siebie !!!
            if (el.name) {
                let val = el.value;
                if (el.type === "checkbox") {
                    val = el.checked;
                }
                // const isCheckbox = el.type === "checkbox";
                // if (isCheckbox) val = el.checked
                result[el.name] = val
            }
        }

        let recipe = new Recipe(getNewIdForNewRecipe(), result.recipeName, result.recipeDescription);
        saveOneRecipeToLocalStorage(recipe);

        let urlOrigin = window.location.origin;
        let addRecipeUrl = urlOrigin + "/recipes.html"
        window.location = addRecipeUrl;
    })
}

export {setRequiredMethodsForManageRecipes};