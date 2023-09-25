function persistence(num) {
    if(num<=9){
        return 0
    }
    //let str=String(num)
    let mul=1
    while(num>10){
        let num1=String(num)
        for(let i=0;i<num1.length;i++){
            mul*=num1[i]
        }
        num=mul
        mul=1
    }
return (num)
    //code me
 }


 console.log(persistence(999))
 
 
 