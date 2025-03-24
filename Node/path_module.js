// path module
var pm = require('path')
var path = "D:/lju/abc/test/a.txt";
var dn = pm.dirname(path)
console.log(dn); // D:\lju\abc\test
var en=pm.extname(path)
console.log(en); // .txt
var bn=pm.basename(path)
console.log(bn); // a.txt
var p=pm.parse(path)
console.log(p)
