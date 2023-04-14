const list = [1, 2, 1, 2, 3, 4, 1, 2];
// console.log(list);

// remove duplicates without set method.

function removeDuplicates(array){
    let a = [];
    array.map(x => !a.includes(x) ? a.push(x) : "");
    return a;
}

console.log(removeDuplicates(list));


// count of numbers.

const count = {};
for (let i = 0; i < list.length; i++) {
  const num = list[i];
  count[num] = count[num] ? count[num] + 1 : 1;
}
console.log(count);


// sum of array using reduce method.

const sum = list.reduce((acc, curr) => acc + curr, 0);
console.log(sum);


//find max & min.

const max = Math.max(...list);
const min = Math.min(...list);
console.log('Maximum value:', max);
console.log('Minimum value:', min);



let string = "I love Javascript";

// reverse the string.

let reverseString = string.split('').reverse().join('');
console.log(reverseString);

// replace the javascript to python.

let newString = string.replace('Javascript','Python');
console.log(newString);

// word count of string.

let wordCount = string.split(' ').length;
console.log(wordCount);

