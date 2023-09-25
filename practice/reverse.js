function reverse(a){
for(let i=length-1;i>0;i--){
    a.push(a[i])
}
return a
}
console.log(reverse([1,2,3,4]))