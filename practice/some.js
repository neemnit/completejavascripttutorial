function some(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] < b) {
            return true
        }
        else if (a[i] > b) { 
        return false
    }
    }
}


console.log(some([1, 2, 3, 4, 5], function(val) { return val > 5; })); // false

//some([1, 2, 3, 4, 5], function(val) { return val < 2; }); // true