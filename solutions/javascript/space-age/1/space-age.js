const PLANET_YEARS_IN_SECOND = {
  mercury: 7_600_544,
  venus: 19_414_149,
  earth: 31_557_600,
  mars: 59_354_033,
  jupiter: 374_355_659,
  saturn: 929_292_363,
  uranus: 2_651_370_019,
  neptune: 5_200_418_560
}

export const age = (planet, ageInSeconds) => {
  let time = PLANET_YEARS_IN_SECOND[planet];
  
  if (!time) {
      throw new Error("not a planet");
  }

  return parseFloat((ageInSeconds / time).toFixed(2));
};
