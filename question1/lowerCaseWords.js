function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(mixedArray)) {
        reject("Input is not an array");
        return;
      }
  
      const filteredAndLowercased = mixedArray
        .filter(item => typeof item === "string")
        .map(word => word.toLowerCase());
  
      if (filteredAndLowercased.length > 0) {
        resolve(filteredAndLowercased);
      } else {
        reject("No lowercase words found in the input array");
      }
    });
  }
  
  // Example usage:
  const mixedArray = ['pizza', 10, true, 25, false, 'wings'];
  
  lowerCaseWords(mixedArray)
    .then(result => {
      console.log("Lowercased words:", result);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  