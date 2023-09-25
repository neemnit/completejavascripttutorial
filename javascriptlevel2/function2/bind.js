const person1={firstName:'steve',lastName:'adams'}
/*function greet(msg){
    console.log(this)
    console.log(`${msg} ${this.firstName}`)
}
 const result=greet.bind(person1,'hi')
 result()*/
 function greet(msg){
     console.log(this)
   console.log( `${this.firstName} ${msg}`)
 }
 const result=greet.bind(person1,'hi')
 result()