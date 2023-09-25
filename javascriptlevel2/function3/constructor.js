function User(fname,lname){
    this.firstname=fname
    this.lastname=lname
    this.admin='false'
    this.details=function(){
        return`${this.firstname} ${this.lastname}`
    }
    this.remove=function(){
        return `${this.firstname}`
    }
    //console.log(this)
}
const user=new User('nitish','kumar')
const user2=new User('manish','gupta')
const user3=new User('susil','modi')
console.log(user)
user.lastname='gupta'
console.log(user.details())
console.log(user.remove())
console.log(user2)
console.log(user3)