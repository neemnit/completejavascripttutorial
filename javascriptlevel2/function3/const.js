function User(fname,lname){
    this.firstname=fname
    this.lastname=lname
    this.greet=function(){
        return this.firstname +' ' +this.lastname
    }

}
const user=new User('nitish','kumar')
console.log(user.firstname)
console.log(user.greet())