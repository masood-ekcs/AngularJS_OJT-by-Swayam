let arr = [1, 4, 34, 546, 42, 2, 10, 3];

// Write a function that tells whether 546 is present in the array

// --- DEFAULT function  –– FIND
function check1(numberToFind) {
  return arr.find(function (value) {
    return value == numberToFind;
  });
}
// --- OR
function check2(numberToFind) {
  return arr.find((value) => value == numberToFind);
}

console.log(check1(546));
console.log(check2(448));

// --- MANUAL function –– FIND
//     let findNum = 546
// for (let i=0; i<arr.length;i++ ){
//     if(arr[i]==findNum){
//         console.log('Number found')
//         return
//     }
// }

function check(numberToFind) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == numberToFind) {
      return true;
    }
  }
  return false;
}

// Write a function named findi returns the index if the number 546 is present and -1 if number not present in the array

// --- DEFAULT function –– INDEXOF
console.log(arr.indexOf(546));

// --- MANUAL function –– INDEXOF
function findI(numberToFind) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == numberToFind) {
      //   let findIndex = i;
      //   return findIndex;
      return i;
    }
  }
  return -1;
}

console.log(findI(546));

// --- DEFAULT function – FOR OF
for (let value of arr) {
  console.log(value);
}

// --- MANUAL function – FOR OF
function isPresent(findNumber) {
  for (let value of arr) {
    if (value == findNumber) {
      return 'It is preseent';
    }
    return 'It is not present';
  }
}
