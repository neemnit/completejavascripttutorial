function is_string(w)
{
if(typeof w === 'object')
return true

else
return false
}
console.log(is_string(8))
console.log(is_string({name:'nait'}))


