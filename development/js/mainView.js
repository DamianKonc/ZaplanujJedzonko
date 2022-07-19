import { settingUserName } from "./savedName.js";
settingUserName();

const planNameInput = document.querySelector(
  ".addPlan__main-descr-el-input-name"
);
const planDescrInput = document.querySelector(
  ".addPlan__main-descr-el-input-descr"
);
const planNumberInput = document.querySelector(
  ".addPlan__main-descr-el-input-num"
);
const addPlanBtn = document.querySelector(".addPlan__header-btn");
const selectItems = document.querySelectorAll(".addPlan__list-day-select");
let plans = [];

document.querySelector(".widgets__addPlan").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".addPlan").classList.toggle("hide");
});
document.querySelector(".widgets__addRecipe").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".recipeAdd__container").classList.toggle("hide");
});

addPlanBtn.addEventListener("click", () => {
  const itemsValueArray = [];
  selectItems.forEach(function (x) {
    itemsValueArray.push(x.value);
  });
  plans.push({
    planName: planNameInput.value,
    planDescr: planDescrInput.value,
    planNumber: planNumberInput.value,
    meals: itemsValueArray,
  });

  document.querySelector(".addPlan").classList.add("hide");
  console.log(plans);
});
