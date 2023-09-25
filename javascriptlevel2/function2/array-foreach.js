const users=[
    {id:1,name:'john'},{
        id:2,name:'steve'}
    
]
//foreach()
users.forEach(function(user){
    console.log(`${user.id}- ${user.name}`)
})
users.forEach(user=> console.log(`${user.id}-${user.name} es6`))
