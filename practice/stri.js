function stringFromObject(obj) {
  let result = '';
  //loop over the object's properties and create a new string
  //return format should be "key = value, key = value"
  for (let i in obj) {
    result += i + ' =' + obj[i];
}
  result += '';

  //return a string
  return result;
}

console.log(stringFromObject({ a: 1, b: '2' }));
// "a = 1, b = 2"