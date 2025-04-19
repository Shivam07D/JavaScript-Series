const accountId = 234457
let accountEmail = "shivam@gmail.com"
var accountPassword = "123456"
accontCity = "Ranchi"
let accontState;

// accountId = 2 // not allowed


accountEmail = "shivam12@gmail.com"
accountPassword = "574643"
accontCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accontCity, accontState])
