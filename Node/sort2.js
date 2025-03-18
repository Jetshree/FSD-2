// Write a script to define two JSON objects named as “division1” and “division2” having an array to store name of students. These names should be sorted alphabetically and should be displayed in console.
var test = {
    "division1": {
        "name":["Z","B","H"]
    },
    "division2": {
        "name" :["Y","A","G"]
    }
}
const d1=test.division1.name
const d2=test.division2.name
const d=d1.concat(d2).sort();
console.log(d)

// [ 'A', 'B', 'G', 'H', 'Y', 'Z' ]