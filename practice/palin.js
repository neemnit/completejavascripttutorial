function palin(m){
let result = m.split('').reverse().join('')
if(result ===m )
return 'is palindrome'
else
return 'not '

}
console.log(palin('mad'))