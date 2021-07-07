/**
 * @param {string} s
 * @return {number}
 */

/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = (s) => {
  let sum = 0;
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const romanSplit = s.split("");
  for (i = 0; i < romanSplit.length; i++) {
    if (romanSplit[i] === "I" && romanSplit[i + 1] === "V") {
      sum -= 2;
    }

    if (romanSplit[i] === "I" && romanSplit[i + 1] === "X") {
      sum -= 2;
    }

    if (romanSplit[i] === "X" && romanSplit[i + 1] === "L") {
      sum -= 20;
    }
    if (romanSplit[i] === "X" && romanSplit[i + 1] === "C") {
      sum -= 20;
    }
    if (romanSplit[i] === "C" && romanSplit[i + 1] === "D") {
      sum -= 200;
    }
    if (romanSplit[i] === "C" && romanSplit[i + 1] === "M") {
      sum -= 200;
    }
  }
  if (romanSplit.length > 0) {
    romanSplit.forEach((letter) => {
      sum += roman[letter];
    });
  }

  return sum;
};
