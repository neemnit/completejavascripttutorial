function human_format(m){
if (typeof (m)=='undefined') return
if(m%100>=11 && m%100<=13){
return m +'th'

}
switch(m % 10){
case 1: return m +'st'
case 2: return m +'2nd'
case 3: return m +'3rd'

}
return m +'th'

}
console.log(human_format(1))
console.log(human_format(8))
console.log(human_format(30165))
console.log(human_format(495))