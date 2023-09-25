function randomElement(arr){
const randomIndex =Math.floor(Math.random()* arr.length)
return arr[randomIndex]


}
console.log(randomElement([10,20,30,40]))