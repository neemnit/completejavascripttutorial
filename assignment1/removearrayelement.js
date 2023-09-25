function removeelement(remove,m){
if(remove.includes(m)){
remove.splice(remove.indexOf(m),1)
return remove
}
else{
return (m) +  '  is not present in the array'}
}

console.log(removeelement([2,5,9,6],5))


console.log(removeelement([2,5,9,6],15))
