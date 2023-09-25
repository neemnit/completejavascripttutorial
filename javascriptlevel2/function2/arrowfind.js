const products=[
    {id:1,name:'marker',price:15},
    {id:2,name:'scale',price:10},
    {
        id:3,name:'board',price:100
    }
]
const result=products.find(function(ele){
    return ele.id===1
})
//console.log(result)
const result2=products.find(ele=>{
    return ele.id===2
})
//console.log(result2)
const result3=products.find(ele=>ele.id===3)
console.log(result3)