const password ='secret123'
//console.log(password.length)
//console.log(password.length >8 && password.length <128)//true
//const user = 'ani'
//console.log(user.toUpperCase())
//console.log(user)
//note:primitives datatypes are immutable that we cannot change
//console.log('JOHN'.toLowerCase())
const word='javascript'
for(let i=0;i<word.length;i++){
if((word.indexOf(word[i])===word.lastIndexOf(word[i])))
        console.log(word[i])
    
}
const res=[1,2,3,4,5,2,3]
for(let i=0;i<res.length;i++){
    if((res.indexOf(res[i])===res.lastIndexOf(res[i])))
            console.log(res[i])
        
    }
/*console.log(word.indexOf('a'))//1
console.log(word.lastIndexOf('a'))//3
console.log(word.lastIndexOf('z'))//-1
console.log(word.indexOf('script'))//4
console.log(word.includes('a'))//true
console.log(word.includes('z'))//false
console.log(word.slice(5))
console.log(word.substr(2,5))//'vascr'
//str to array
const str ='js,react,node,express,mongo'
console.log(str.split(','))
console.log(str.split('*'))
console.log(str.split('*').length)
console.log(str.split(',').length)
console.log(str.split(''))
const map ='bangalore-mysore-cochin'
console.log(map.split('-'))
console.log(map.split('-'))*/