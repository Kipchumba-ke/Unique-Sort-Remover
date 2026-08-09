function uniteUnique(...arr){
  let uniqueArr = []
  for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    const value = arr[i][j];

    if (!uniqueArr.includes(value)) {
      uniqueArr.push(value);
    }
  }
}
return uniqueArr
}

console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]))
