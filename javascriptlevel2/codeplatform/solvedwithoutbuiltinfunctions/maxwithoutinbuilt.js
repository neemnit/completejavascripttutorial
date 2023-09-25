function max(a) {
    let maximum=a[0]
    for(let i=1;i<a.length;i++){
        if(a[i]>maximum){
            maximum=a[i]
        }
    }
    return maximum
}
console.log(max([5,1,4,7,1,2]))
console.log(max([3,4,12,1,8]))
console.log(max([-1,6,3,2.2,-10,-4]))