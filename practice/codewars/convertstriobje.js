/*function wordsToObject(input) {
    let arr=input.split(' ')
    let str=''
    let result=[]
    for(let i=1;i<arr.length;i+=2){
result.push({['name']:arr[i-1],['id']:arr[i]})
//str=[...result]
    }
    return [JSON.stringify(result)]

    //Write your solution here
}*/
function wordsToObject(input) {
    var array = input.split(" ");
    var result = [];
    for(var i=0;i<array.length;){
        var str = "{name : '" + array[i++] + "', id : '" + array[i++] + "'}";
        result.push(str);
    }
    return "[" + result.join(", ") + "]";
}




console.log(wordsToObject("red 1 yellow 2 black 3 white 4"))