const person1={firstName:'steve',lastName:'adams'}
const arr=['nitish','kumar']
function greet(msg,sign){
    console.log(this)
    console.log(`${msg} ${sign} ${this.firstName}`)
}
greet.apply(person1,arr)