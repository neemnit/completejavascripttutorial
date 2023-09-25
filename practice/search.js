function search_word(m,searc){
let result = m.split(' ')
console.log(result)
for(let i = 0; i< result.length;i++){
if(result[i] === searc){
console.log('ewh')
return 'is found'+ i
}
}



}



console.log(search_word('The quick brown fox','fox'))