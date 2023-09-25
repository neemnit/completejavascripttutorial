function capitalizeWords(str){
const result=[]
const words=str.split(' ')
for(let i=0;i<words.length;i++){
const newstr=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()
result.push(newstr)


}
return result.join(' ')

}
console.log(capitalizeWords('js string exercise'))