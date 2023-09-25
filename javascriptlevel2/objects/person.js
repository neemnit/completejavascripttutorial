const person={
    name:'rahul',
    city:'bangalore',
    greet:function(){
        return 'hi there'
    },
    code:function(){
       // return  person.name + ' is currently coding'
       return this
    }
}
console.log(person.name)
console.log(person.city)
console.log(person.greet)
console.log(person.code)
console.log(person.code())
console.log(person.greet())