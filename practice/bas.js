const color = {
    red: ['energy', 'strength', 'power', 'courage']
 }
 //console.log(Object.values(color).join(','))
 //console.log(Object.keys(color).join())
 for(key in color){
   //  console.log(key.charAt(0).toUpperCase()+key.slice(1).toLowerCase())
 }
 console.log(color.red.join(','))
 const colors = [
    { color: 'red', symbols: ['energy', 'strength', 'power', 'courage'] },
    { color: 'blue', symbols: ['loyalty', 'trust', 'stability', 'confidence']},
    { color: 'orange', symbols: ['excitment', 'fun', 'haste', 'action']},
    { color: 'yellow', symbols: ['cheerfulness', 'happiness', 'joy', 'optimism']}
 ]
 colors.forEach((ele)=>{
     console.log(`${ele.color} - ${ele.symbols}`)
 })
 //console.log(nav)