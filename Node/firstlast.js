// Write a function named “firstlast” that takes an array and returns an object with below conditions.
// 1)	The first element of an array must be an object’s key 
// 2)	The last element of an array must be a key’s value.
// Input = [‘abc’,’def’,’ghi’,’jkl’]
// Output =  { abc: ‘jkl’ }
function f1(a){
    var temp = {};
    temp[a[0]]=a[a.length-1]
    return temp;
}
var data=['abc','def','ghi','jkl'];
console.log(f1(data))