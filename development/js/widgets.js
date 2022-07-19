import {getNumberOfRecipes} from "./service/resipes/localStorageService.js";

const numberOfRecipies = document.querySelector(".widgets__infos-info-number");
console.log(localStorage);

if (numberOfRecipies) {
    numberOfRecipies.innerHTML = getNumberOfRecipes();
}

