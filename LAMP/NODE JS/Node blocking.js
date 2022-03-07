node blocking.js
---
var fs = require('fs');
var data = fs.readFileSync('text.txt');
console.log(data.toString());
console.log('End here');
---
text.txt
---
"WELCOME TO ASPIRE SYSTEM".
---

