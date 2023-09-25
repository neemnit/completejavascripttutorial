const superheros =[{name:'molecule man',age:23,secretidentity:'dan jukes',powers:['radiation resistance','turning tiny','radiation blast']},
{name:'molecule man',age:23,secretidentity:'dan jukes',powers:['radiation resistance','turning tiny','radiation blast']}]
function superpowers(arr,name){
let result=''
for(let i=0;i<arr.length;i++){
if(arr[i].name=== name){
    result+=arr[i].powers.join(',')
}

}
return result
}
console.log(superpowers(superheros,'molecule man'))