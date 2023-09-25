const players = ['dhoni', 'dhoni','sachin', 'virat', 'sachin', 'dhoni']
const result={}
function frequency(arr){
for(const char of arr){
    if(result.hasOwnProperty(char)){
        result[char]= result[char]+1
    }else{
        result[char]=1
    }
    //console.log(result)
    
    
}console.log(result)
for(const key in result){
    console.log(key + 'appears '+result[key] +'time(s)')
}
for(const star in result){
    console.log(star +'-'+ result[star])
}

//return result

}
(frequency(players))
// 1. word frequency - { dhoni: 3, sachin: 2, virat: 1}

// 2. loop over the object and print 
/*
    dhoni appears 3 time(s)
    sachin appears 2 time(s)
    virat appears 1 time(s)
*/


// 3. print stars of the player
/*
    dhoni - ***
    sachin - **
    virat - *
*/