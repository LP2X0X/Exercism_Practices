// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const WEDGES_BY_SIZE = {
  small: 6,
  medium: 8,
  large: 10
}

const JUICES_PREPARATION_TIME = {
  'Pure Strawberry Joy': 0.5,
  'Energizer': 1.5,
  'Green Garden': 1.5,
  'Tropical Island': 3,
  'All or Nothing': 5
}

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  return JUICES_PREPARATION_TIME[name] ?? 2.5;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let index = 0;
  
  while (index < limes.length && wedges < wedgesNeeded)
  {
      switch (limes[index]) {
        case "small":
          wedges += 6;
          break;
        case "medium":
          wedges += 8;
          break;
        case "large":
          wedges += 10;
          break;
      }

      index++
  }
  return index;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let sum = 0;
  let i = 0;

  while (sum < timeLeft && i < orders.length) {
    sum += timeToMixJuice(orders[i]);
    i++;
  }

  return orders.slice(i);
}
