const name={
    username:'ni',
    pass:4566
}
function greet(email){
    console.log(this)
    console.log(`${email} and ${this.username}`)
}
const result=greet.bind(name,'neemnit@gmail.com')
result()