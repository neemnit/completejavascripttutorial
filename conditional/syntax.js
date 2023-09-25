/*
if statement
if(condition){
statement }
---
if else statement
if else statement
if(condition){
statement1
}
else{
statement2
}
---
if else if else statement
if(condition1) {
statement1
} else if (condition2){
statement2
}
else if(condition3){
statement3
}
else {
statement
}
const userPassword ='secret1'
if (userPassword.length>=8 && userPassword.length<=128)
{
console.log('proceed forward')
}
else
{
console.log('password length is too short(8-128)')
} */

const randomNumber =23 ,userGuess =0
if(userGuess > randomNumber){
console.log('your guess is high')}
else if (userGuess < randomNumber){
console.log('your guess is low')}
else if (userGuess == randomNumber){
console.log('you guessed it right')}
else {
console.log('invalid input')}