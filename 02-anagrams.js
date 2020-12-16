function firstAnagram(str1, str2) {
  let newStr2 = str2.split("");
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    let index = newStr2.indexOf(char);
    if (index !== 0) {
      newStr2.splice(index, 1);
    }
  }
  if (newStr2.length === 0) {
    return true;
  }
  if (newStr2.length > 0) {
    return false;
  }
}

function secondAnagram(str1, str2) {
  let r1 = str1.split("");
  let r2 = str2.split("");
  let sortedOne = r1.sort();

  let sortedTwo = r2.sort();

  if (sortedOne.join() === sortedTwo.join()) {
    return true;
  }
  return false;
}
console.log(secondAnagram("gizmo", "sally"));
console.log(secondAnagram("elvis", "lives"));

function thirdAnagram(str1, str2) {
  // Code goes here ....
}

function fourthAnagram(str1, str2) {
  // Code goes here ....
}
