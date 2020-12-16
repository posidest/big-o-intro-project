function quadraticBiggestFish(fishes) {
  let longest = 0;
  let results = [];
  for (let i = 0; i < fishes.length; i++) {
    for (let j = i + 1; j < fishes.length; j++) {
      if (fishes[j].length > fishes[i].length) {
        longest = fishes[j].length;
        results.push(fishes[j]);
      }
    }
  }
  return results[results.length - 1];
}
const fishies = [
  "fish",
  "fiiish",
  "fiiiiish",
  "fiiiish",
  "fffish",
  "ffiiiiisshh",
  "fsh",
  "fiiiissshhhhhh",
];

console.log(quadraticBiggestFish(fishies));

function nlognBiggestFish(fishes) {
  fishes.sort(function (fishOne, fishTwo) {
    return fishOne.length - fishTwo.length;
  });
  return fishes[fishes.length - 1];
}
// const fishies = [
//   "fish",
//   "fiiish",
//   "fiiiiish",
//   "fiiiish",
//   "fffish",
//   "ffiiiiisshh",
//   "fiiiissshhhhhh",
//   "fsh",
// ];
console.log(nlognBiggestFish(fishies));

const linearBiggestFish = (fishes) => {
  let longest = 0;
  let longestFish = "";
  for (let i = 0; i < fishes.length; i++) {
    if (fishes[i].length > longest) {
      longest = fishes[i].length;
      longestFish = fishes[i];
    }
  }
  return longestFish;
};

console.log(linearBiggestFish(fishies));

tilesArray = [
  "up",
  "right-up",
  "right",
  "right-down",
  "down",
  "left-down",
  "left",
  "left-up",
];

function slowDance(direction, tilesArray) {
  let tentacleNumber;
  for (let i = 0; i < tilesArray.length; i++) {
    if (tilesArray[i] === direction) {
      tentacleNumber = i;
    }
  }
  return tentacleNumber;
}

console.log(slowDance("right-down", tilesArray));

tilesObj = {
  up: 0,
  "right-up": 1,
  right: 2,
  "right-down": 3,
  down: 4,
  "left-down": 5,
  left: 6,
  "left-up": 7,
};

function fastDance(direction, tilesObj) {
  return tilesObj[direction];
}
console.log(fastDance("right-down", tilesObj));
console.log(fastDance("right", tilesObj));
