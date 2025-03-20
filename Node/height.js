// Write a JS to store an array of objects having height and name. Display name and height of person with highest height.
const person = 
    [
        {
            name: "NAS",
            height: 5.2
        },
        {
            name: "ABC",
            height: 5.5
        },
        {
            name: "XYZ",
            height: 6.0
        }
    ] 
console.log(Math.max(...person.map(obj => obj.height))) // max doesn't work on array, so elements of array are spread by ...


// alternative:
var a=person.sort((a,b)=>b.height-a.height)[0];
console.log(a.height)
