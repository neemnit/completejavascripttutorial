function text_truncate(str,pos,pattern){
if(pos ===null)
pos=0
if(pattern =='undefined')
pattern =''
return str.substr(0,pos) + pattern



}



console.log(text_truncate('We are doing JS string excercises.'))
console.log(text_truncate('We are doing JS string excercises.',19))
console.log(text_truncate('We are doing JS string excercises.',15,'!!'))