const users=[{id:1,name:'john'},{id:2,name:'items'}]
const result=users.find(function(ele){
    return ele.id==2

})
console.log(result)