const person1={firstName:'steve',lastName:'adams'}
   // console.log(this.firstName +msg)
    

function greet(msg){
   console.log(this)
    console.log(`${msg}  ${this.firstName}`)
}
greet.call(person1,'hi')
//}
//console.log(person1.greet.call(person1,'hi'))


