const currentInventory=[{name:'tshirt',pieces:43},
                        {name:'jeans',pieces:23
                    },{name:'sweater',pieces:34}]

const newInventory=[{name:'tshirt',pieces:20},
                     {name:'jeans',pieces:10},
                    {name:'belet',pieces:5}]
                    function update(currentInventory,newInventory){
for(let i=0;i<currentInventory.length;i++){
    for(let j=0;j<newInventory.length;j++){
       // if(currentInventory.includes(newInventory[j].name)){
       if(currentInventory[i].name === newInventory[j].name){
            newInventory[j].pieces+=currentInventory[i].pieces
        }
       // if(currentInventory.includes(newInventory[j].name))
        /*else if(currentInventory[i].name(!includes(newInventory[j].name))){
            currentInventory.push(newInventory[j])*/
        /* else{
             currentInventory.push(newInventory[j])
         }*/

        }
        }
    


return(newInventory)}
console.log(update(currentInventory,newInventory))