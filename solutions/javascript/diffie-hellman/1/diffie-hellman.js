const checkPrime = function (num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export class DiffieHellman {
  #p;
  #g;

  constructor(p, g) {
    if (
      p <= 0 ||
      p >= 9999 ||
      g <= 0 ||
      g >= 9999 ||
      !checkPrime(p) ||
      !checkPrime(g)
    ) {
      throw new Error();
    }
    this.#p = p;
    this.#g = g;
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.#p) {
      throw new Error();
    }
    return Math.pow(this.#g, privateKey) % this.#p;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return Math.pow(theirPublicKey, myPrivateKey) % this.#p;
  }

  static getPrivateKey(p) {
    let randomNum;
    do {
      randomNum = Math.floor(Math.random() * p);
    } while (randomNum <= 1  || randomNum >= p);

    return randomNum;
  }
}
