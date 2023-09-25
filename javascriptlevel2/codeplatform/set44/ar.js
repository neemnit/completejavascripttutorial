const futi=[1,2,34,3]
for(let i=0;i<futi.length;i++){
    futi.shift()
    i=0
    console.log(futi[i])
}
futi.shift()
//console.log(futi[0])
/*function threeOddNumbers(a){
    let count = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 3 != 0 || a[i] == 1) {
            count += 1
        }
    }
            if (count > 3) {
                return true
            } else {
        return false    
        }
    }*/
    function threeOddNumbers(a){
        let b = a.filter(ele => { return ele % 2 ===1})
        if (b.length === 4) return true
        else return false
    }
    console.log(threeOddNumbers([1,2,3,4,5,7]))