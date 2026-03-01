/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

const DEFAULT_PREP_TIME = 2;
const DEFAULT_NOODLES_WEIGHT = 50;
const DEFAULT_SAUCE_QUANTITY = 0.2;

export function cookingStatus(time){
  if (time === 0) {
    return "Lasagna is done.";
  } else if (!time ) {
    return "You forgot to set the timer."
  } else if (time !== 0) {
    return "Not done, please wait.";
  }
}

export function preparationTime(layers, prepTimePerLayer) {
  return !prepTimePerLayer ? layers.length * DEFAULT_PREP_TIME : layers.length * prepTimePerLayer;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  for (let layer of layers) {
    if (layer === "noodles") {
      noodles += DEFAULT_NOODLES_WEIGHT;
    }
    else if (layer === "sauce") {
      sauce += DEFAULT_SAUCE_QUANTITY;
    }
  }

  return {noodles, sauce};
}

export function addSecretIngredient(friendList, myList) {
  myList.push(friendList.at(-1));
}

export function scaleRecipe(recipe, number) {
  if (!number) {
    return recipe;
  }
  
  let newRecipe = {};
  for (let key in recipe) {
    newRecipe[key] = recipe[key] * (number / 2);
  }
  return newRecipe;
}