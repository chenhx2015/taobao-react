let promise = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve(3)
    }, 1000)
});
promise.then(function(result) {
  console.log('resolved.', result);
  return result
})

console.log('Hi!');