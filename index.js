// #### Exercise 1
// 1. Create an array.
// 2. Add four names to the array.
// 3. Print the array
let petNames = ["Coffee","Copper", "Penny","Squirtle"];
console.log(petNames);


// #### Exercise 2
// 1. Create an array with 5 numbers in it.
// 2. Print the numbers.
let userNum = [0,1,2,3,4];
console.log(userNum);
alert(userNum);
// PARTIAL CREDIT : You should use a loop to print each number in this array



//     #### Exercise 3
// 1. Create an array with 4 names.
// 2. Print the third item in the array.
// 3. Delete the second item.
// 4. Print the third item in the array again.

let catNames = ["Missy","Excalipurr","Seiko","C H O N K"];
console.log(catNames);
catalert(3,catNames);
function catalert(arrayindex,arrayname)
{
    alert(arrayname[arrayindex])
}
// PARTIAL CREDIT : You are altering the 4th item in the array
catNames.pop(2);
// INCOMPLETE : You are using the wrong function to remove an item by index
// catAlert(index,catNames );
// function catAlert(in)
// {
//     al
// }