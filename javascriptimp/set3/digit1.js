function digitroot(n){
 let sum =n
 //console.log(sum)
while(sum>9){
    let n1=sum
    //console.log(n1)
        let div=n1/10
        let rem=n1%10
        let result =div+rem
       sum =result
       sum=Math.floor(sum)
   // console.log(sum)
}
    return(sum)


}
console.log(digitroot(1334))

console.log(digitroot(133456))