const customer ={
firstName:'john',
lastName:'smith',
email:'john@gmail.com'}
//var firstName =customer.firstName
//var lastName = customer.lastName
//var email =customer.email
//console.log(firstName,lastName,email)
//object destructuring es6
const {firstName} = customer
console.log(firstName)
const{lastName,email} = customer
console.log(lastName,email)