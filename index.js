// Instructions
// - Create an array with the following names: Mason, Marcora, Rico, Neves, Ivanov
// - Have a prompt that adds your last name to the array
// - Have an output that has the names sorted alphabetically
// - Have an output that tells you what is the position of your name in the sorted array
// - Have an output that Uppercase's all names in the array

const lastName = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"]

let newName = prompt("What is your last name?");

lastName.push(newName);
lastName.sort();

alert(`Here is the sorted Name list
${lastName}`)

// for(let i = 0; i < lastName.length; i++ ){
//     if(lastName[i] === newName){
//         i++;
//         alert(`Your name is on position ${i} of the sorted Name list`)
//         break;
//     }
// }

const index = lastName.indexOf(newName);
alert(`Your name is on position ${index+1} of the sorted Name list`)

const upperNameList = []

for(const name of lastName){
    upperNameList.push(name.toUpperCase())
}

alert(`Here is the Upper Name list
${upperNameList}`)


// Challenge
// Let's take it a step further and group each sorted name with its upper-cased one in a sub-array, which in its turn will go inside another array to group it all together. 
// It should look like this in your output:
// [  ["Surname A", "SURNAME A"], ["Surname B", "SURNAME B"] ...other names ]
// Output the result to the console.
const namePairs=[]
for(var i = 0; i<lastName.length; i++)  namePairs[i] = [lastName[i], upperNameList[i]];

console.log(namePairs)