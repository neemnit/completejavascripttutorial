/*function findNotBookedTables(a) {
    function booked(num){
        for(let i=0;i<a.length;i++){
            if(a[i]===num){
                return i
            }
        }
    }
}*/
    // console.log((booked(['booked','not booked','booked','not booked'])))
       // if (ele === 'not booked') {
           // console.log('booked')
         // sum= a[i]
       // }
       // return sum
      // console.log(ele,i)
     // return result

   // }
   function findNotBookedTables(a) {
    let nb=[]
    for (let i = 0; i < a.length; i++){
        if (a[i] === 'not booked') {
            nb.push(i)
        }
    }
    return nb
//type code here
}
function findNotBookedTables(a) {
    let nb=[]
    for (let i = 0; i < a.length; i++){
        if (a[i] === 'not booked') {
            nb.push(i)
        }
    }
    return nb
//type code here
}
console.log(findNotBookedTables(["not booked", "booked", "booked", "not booked", "not booked"])
)
console.log(findNotBookedTables([])
)////type code here