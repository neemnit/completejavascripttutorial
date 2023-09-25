Array.prototype.customForEach = function(callback) {
    console.log(callback)
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this); // Call the callback function with current element, index, and array
  }
};



const numbers = [1, 2, 3, 4, 5];

numbers.customForEach((num, index) => {
  console.log(`Number at index ${index} is ${num}`);
});