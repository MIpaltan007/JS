const accountId=1443
let accountEmail="aditya@google.com"
var accountPassword="1223"
accountCity="Mumbai"

//accountId=2

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity])

/*
var - can be redeclared and reupdated (Global Scope)
let - cannot be redeclared but reupdated (Block Scope)
const - cannot be redeclared and reupdated (Block Scope)

Prefer not to use 'var' due to block scope issues and functional scope 

let a
console.log(a) - Undefined

const a
console.log(a) - Error
*/

