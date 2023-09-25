const users=[
    {id:1,name:'john',dept:'sales',price:23},
    {id:2,name:'starc',dept:'tech',price:230},
    {id:3,name:'mick',dept:'main',price:26}
]
const result=users.map(function(user){
    return user.name
})
console.log(result)
const result2=users.map(user=>{
    return user.price>23
})
console.log(result2)