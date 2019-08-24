// Promise
// example 1:
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         resolve(3)
//     }, 1000)
// });
// promise.then(function(result) {
//   console.log('resolved.', result);
//   return result
// })

// console.log('Hi!');


// example 2:
// setTimeout(() => {
//     console.log(1)
// }, 3000);

// new Promise((resolve, reject) => {
//     console.log(2)
//     setTimeout(() => {
//         console.log(3)
//     }, 0);
//     console.log(4)
// })

// console.log(5)

// example 3:
// var id = 1
// var obj = {
//     id: 2,
//     fn1() {
//         console.log(id)
//         console.log(this.id)
//     },
//     fn2: () => {
//         console.log(id)
//         console.log(this.id)
//     }
// }
// var fn0 = obj.fn1

// fn0()
// obj.fn1()
// obj.fn2()



