function countUpThenDown(number){
let temp =[]
for(let i=0;i<=number;i++){
temp.push(i)

}
for(let j =number-1;j>=0;j--){
temp.push(j)


}
return temp


}


console.log(countUpThenDown(2))