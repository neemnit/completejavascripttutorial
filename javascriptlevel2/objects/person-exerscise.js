const person={
    name:'rahul',
    city:'bangalore',
    profession:'sr.software developer',
    details:function(){
        return `${this.name} is working as a ${this.profession} in ${this.city}`
    },
    greet:function(){
        return 'hi there'
    },
    code:function(){
       // return  person.name + ' is currently coding'
       return this
    }
}
console.log(person.details())