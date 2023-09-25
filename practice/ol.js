const colors = [
    { color: 'red', symbols: ['energy', 'strength', 'power', 'courage'] },
    { color: 'blue', symbols: ['loyalty', 'trust', 'stability', 'confidence']},
    { color: 'orange', symbols: ['excitment', 'fun', 'haste', 'action']},
    { color: 'yellow', symbols: ['cheerfulness', 'happiness', 'joy', 'optimism']}
 ] 
 const result=[]
 colors.forEach((ele)=>{
     
     result.push(ele.color)
     for(let i=0;i<ele.symbols.length;i++){
         result.push(ele.symbols[i])
     }
     
 })
 console.log(result.join(','))