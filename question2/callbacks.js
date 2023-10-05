// promises.js
function resolvedPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise resolved successfully after 500ms");
      }, 500);
    });
  }
  
  function rejectedPromise() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Promise rejected after 500ms");
      }, 500);
    });
  }
  
  module.exports = {
    resolvedPromise,
    rejectedPromise,
  };
  