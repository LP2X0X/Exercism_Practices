/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */

const PRICES_OF = {
  "Margherita": 7,
  "Caprese": 9,
  "Formaggio": 10,
  "ExtraSauce": 1,
  "ExtraToppings": 2,
}

export function pizzaPrice(pizza, ...[firstExtra, ...restExtra]) {
  switch(firstExtra) {
    case "ExtraSauce":
    case "ExtraToppings":
      return PRICES_OF[firstExtra] + pizzaPrice(pizza, ...restExtra);
      break;
    default:
      return PRICES_OF[pizza];
  }
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce((sum, item) => sum + pizzaPrice(item.pizza, ...item.extras), 0);
}
