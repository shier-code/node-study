/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-01-30 15:47:27
 * @LastEditors: went
 * @LastEditTime: 2023-01-30 17:22:04
 */
function fn() {
  return Promise.resolve(10)
}
//等同
async function fn2() {
  return 10
}
function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 1000);
  })
}
async function fn3() {
  // sum(10, 20).then(r => sum(r, 30))
  //   .then(r => sum(r, 30))
  //   .then(r => console.log(r));
  //通过await调用异步函数时，会暂停代码执行（不会影响到异步函数以外的代码），直到有结果时才将结果返回
  //通过await调用的异步代码时，需要通过trycatch处理异常
  //如果async声明函数中没有await,等同于返回Promise.resolve(),同步代码依次执行
  try {
    let res = await sum(10, 20)
    res = await sum(res, 30)
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
fn3()
async function fn4() {
  console.log(1);
  await console.log(2);
  //当使用await调用同步函数后，其后面所有代码会在当前函数执行完后被放入微任务队列中
  console.log(3);
}
//等同于 
// function fn4() {
//   return new Promise(resolve => {
//     console.log(1);
//     //加了await
//     console.log(2);
//     resolve()
//   }).then(r => {
//     console.log(3);
//   })
// }

fn4()
console.log(4);