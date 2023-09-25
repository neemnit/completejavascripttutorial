const product=[{name:'milk',quantity:1,price:0.10},
{name:'braead',quantity:10,price:10},{name:'jam',quantity:5,price:0.50}]
function getTotalPrice(product){
    let result=0
for(let i=0;i<product.length;i++){
    result+= product[i].quantity * product[i].price
}
return result

}
console.log(getTotalPrice(product))