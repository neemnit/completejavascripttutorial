const name={
    username:'nitish',
    pass:4566
}
const email=['neemnit@gmail.com']
function greet(email){
    console.log(this)
    console.log(`${email} and ${this.username}`)
}
greet.apply(name,email)