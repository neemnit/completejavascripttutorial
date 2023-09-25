function volumeOfBox(a){
    let volume=1
let result=(Object.values(a))
for(let i=0;i<result.length;i++){
   volume =volume * result[i] 
}

return volume
}

console.log(volumeOfBox({ width: 2, length: 5, height: 8 }))