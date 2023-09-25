let array1=[3,5,6,7,8,13]

let array2=[1,0,2,3,4]
//let array2=[3,5,6,7,8,13]
const result=[]
for(let i=0;i<array1.length;i++){
    for(let j=i;j<=i;j++){
    result.push(array1[i]+array2[j])
    }
}
console.log(result)