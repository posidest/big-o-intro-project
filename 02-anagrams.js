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
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    if(!obj1[str1[i]]) {
      obj1[str1[i]] = 1;
    } else {
      obj1[str1[i]]++;
    }
    if (!obj2[str2[i]]) {
      obj2[str2[i]] = 1;
    } else {
      obj2[str2[i]]++;
    }
  }

  for(let key in obj1) {
    if(obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;

}

console.log(thirdAnagram("gizmo", "sally"));
console.log(thirdAnagram("elvis", "lives"));



function fourthAnagram(str1, str2) {
  let obj = {};
  for(let i = 0; i < str1.length; i++) {
    if (!obj[str1[i]]) {
      obj[str1[i]] = 1;
    } else {
      obj[str1[i]]++;
    }
    if (!obj[str2[i]]) {
      obj[str2[i]] = 1;
    } else {
      obj[str2[i]]++;
  }
}
let counter = 0;
for(let key in obj) {
  counter++;
  if(obj[key] === 1) {
    return false;
  }
  }
if(counter !== str1.length) {
  return false;
}
return true;
}





console.log(fourthAnagram("gizmo", "sally"));
console.log(fourthAnagram("elvis", "lives"));