const products=[
    {id:1,name:'marker',price:15},
    {id:2,name:'scale',price:10},
    {
        id:3,name:'board',price:100
    }
]
const result=products.filter(function(product){
    return product.price<=20

})
//console.log(result)
const result2=products.filter(product=>{
    return product.price>60
})
//console.log(result2)
const result3=products.filter(product=>product.price<15)
console.log(result3)