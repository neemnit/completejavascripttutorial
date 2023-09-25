const menuItems=[{id:1,name:'chicken kabab',price:290,isveg:false},
{id:2,name:'paneer chilly',price:210,isveg:true},
{id:3,name:'veg biryani',price:300,isveg:true},
{id:4,name:'chicken biryani',price:350,isveg:false},]
//find all the items which is veg
//const result=menuItems.filter(function(ele){
    //return ele.isveg === true
//})
//console.log('veg items',result)
//find the items whoisse price is between 200 and 300
/*const result=menuItems.filter(function(ele){
    return ele.price>=200 && ele.price<=300
})
console.log('price',result)
//find the item whose id is 3
const result=menuItems.filter(function(ele){
    return ele.id===3
})
console.log(result)*/
// find the itemes whas has terms biryaini in it
const result=menuItems.filter(function(ele){
    return ele.name.includes('biryani')
})
console.log(result)
