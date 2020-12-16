function quadraticBiggestFish(fishes) {
  let longest = 0;
  let results = [];
  for (let i = 0; i < fishes.length; i++) {
    for(let j = i + 1; j < fishes.length; j++) {
      if(fishes[j].length > fishes[i].length) {
        longest = fishes[j].length;
        results.push(fishes[j])
      }
    }
  }
  return results[results.length - 1];
}
const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
  'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];

  console.log(quadraticBiggestFish(fishies));


function nlognBiggestFish(fishes) {
  // Code goes here ...
}


function linearBiggestFish(fishes) {
  // Code goes here ...
}


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  // Code goes here ...
}


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  // Code goes here ...
}
