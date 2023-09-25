function highAndLow(numbers){
    const arr=numbers.split(' ')
    const min=Math.min(...arr)
    const max=Math.max(...arr)
    return `${max} ${min}`
  }

  console.log(highAndLow('1 2 3 4 5'))