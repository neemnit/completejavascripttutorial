const players = ['dhoni', 'dhoni','sachin', 'virat', 'sachin', 'dhoni']

// 1. word frequency - { dhoni: 3, sachin: 2, virat: 1}
function frequency(arr) {
    const result = { }
    arr.forEach(function(ele){
        // if(!result.hasOwnProperty(ele)) {
        //     result[ele] = 1
        // } else {
        //     result[ele] += 1
        // }
        if(result.hasOwnProperty(ele)) {
            result[ele] += 1
        } else {
            result[ele] = 1
        }
    })
    return result 
}

const obj = frequency(players)
console.log(obj)

// 2. loop over the object and print 
/*
    dhoni appears 3 time(s)
    sachin appears 2 time(s)
    virat appears 1 time(s)
*/

/*2. loop over the object and print 
/*
    dhoni appears 3 time(s)
    sachin appears 2 time(s)
    virat appears 1 time(s)
*/

function loopObj(obj) {
    for(const key in obj) {
        console.log(`${key} is found ${obj[key]} time(s)`)
    }
}

loopObj(obj)
// 3. print stars of the player
/*
    dhoni - *
    sachin - **
    virat - *
*/

function printStars(obj) {
    for(const key in obj) {
        //console.log(`${key} - ${'*'.repeat(obj[key])}`)
         let star = ''
         for(let i = 0; i < obj[key]; i++) {
            star += '*'
         }
        console.log(`${key} - ${star}`)
        }
}

printStars(obj)