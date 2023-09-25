function values(a) {
    let result=[]
    for (const key in a) {
        result.push(a[key])
    }
    return result

}
console.log(values({a:1,b:2}))
    console.log(values({}))