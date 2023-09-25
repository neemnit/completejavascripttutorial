const product=[{name:'milk',quantity:1,price:0.10},
{name:'braead',quantity:10,price:10},{name:'jam',quantity:5,price:0.50}]
function getTotalPrice(product){
    let result=0
product.forEach(function(ele){
    result+= ele.quantity * ele.price
})
return result

}
console.log(getTotalPrice(product))