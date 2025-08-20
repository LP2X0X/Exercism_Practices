//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
    this.isValid = sides[0] > 0 &&
                    sides[1] > 0 &&
                    sides[2] > 0 &&
                    sides[0] + sides[1] > sides[2] &&
                    sides[1] + sides[2] > sides[0] &&
                    sides[0] + sides[2] > sides[1];
  }

  get isEquilateral() {
    return this.isValid ? (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[0] === this.sides[2]) : false;
  }

  get isIsosceles() {
    return this.isValid ? (this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2] || this.sides[0] === this.sides[2]) : false;
  }

  get isScalene() {
    return this.isValid ? (this.sides[0] !== this.sides[1] && this.sides[1] !== this.sides[2] && this.sides[0] !== this.sides[2]) : false;
  }
}
