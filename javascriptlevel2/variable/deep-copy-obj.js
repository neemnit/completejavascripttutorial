const person ={
    name:'steve'
}
//DEEP COPY METHOD
//const student=Object.assign({},person)
/*console.log(person)
console.log(student)
person.name='johnson'
console.log(person)
console.log(student)
student.name='jack'
console.log('person',person)
console.log('student',student)*/
//DEEP COPY METHOD 2
const student={...person}
console.log(person)
console.log(student)
person.name='johnson'
console.log(person)
console.log(student)
student.name='jack'
console.log('person',person)
console.log('student',student)