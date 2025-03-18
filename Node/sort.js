// Write a JSON object which contains array of 3 objects. Each object contains 2 properties a name and an age. Now, sort an array values by age in descending order. Print name and age in terminal as per the sorted age.
const student = 
    [
        {
            name: "PQR",
            age: 25
        },
        {
            name: "ABC",
            age: 30
        },
        {
            name: "XYZ",
            age: 33
        }
    ] 

console.log(student.sort((a,b)=>b.age-a.age)) //descending order

// [
//     { name: 'XYZ', age: 33 },
//     { name: 'ABC', age: 30 },
//     { name: 'PQR', age: 25 }
// ]