//const result=[]
const currentInventory = [
    { name: "HTC", stock: 25 },
    { name: "Nokia", stock: 1000 },
    { name: "Samsung", stock: 50 },
    { name: "Sony", stock: 10 },
    { name: "Apple", stock: 15 }
]

const newInventory = [
    { name: "LG", stock: 5 },
    { name: "Sony", stock: 10 },
    { name: "Samsung", stock: 5 },
    { name: "Apple", stock: 15 }
]
for(let i=0;i<currentInventory.length;i++){
    for(let j=0;j<newInventory.length;j++){
        if(currentInventory[i].name === newInventory[j].name){
            currentInventory[i].stock+=newInventory[j].stock
        }
    
  //  else{
    // result.push(newInventory[j])
    // }
    //console.log(currentInventory)
}
}
let item
for(let i=0;i<newInventory.length;i++){
    for(let j=0;j<currentInventory.length;j++){
     item=(!newInventory[i].name.includes(currentInventory[j].name))
         if(item===false){
             break
         }
     
            //item=newInventory[i]
            //currentInventory.push(item)

        
    }
    if(item){
        currentInventory.push(newInventory[i])
    }
    
}


console.log(currentInventory)