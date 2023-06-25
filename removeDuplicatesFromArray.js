function removeDuplicates(array) {
  const uniqueArray = [];
  
  array.forEach((value) => {
    if (!uniqueArray.includes(value)) {
      uniqueArray.push(value);
    }
  });
  
  return uniqueArray;
}

// Example usage
const originalArray = [1, 2, 3, 2, 4, 1, 5, 3];
const uniqueArray = removeDuplicates(originalArray);

console.log("Original Array:", originalArray);
console.log("Unique Array:", uniqueArray);
