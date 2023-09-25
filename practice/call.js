const name={
    username:'ni',
    pass:4566
}
function greet(email){
    console.log(this)
    console.log(`${email} and ${this.username}`)
}
greet.call(name,'neemnit@gmail.com')