const person ={
 firstName:'john',
 lastName:'doe',
 age:22}
 console.log(person.firstName)
 console.log(person)
 // add create property
 person.city ='bangalore'
 console.log(person)
 //update
 person.age =25
 console.log(person)
 person['firstName'] ='joh'
 console.log(person)
 person['country'] ='india'
 //delete
 delete person.lastName
 console.log(person)

