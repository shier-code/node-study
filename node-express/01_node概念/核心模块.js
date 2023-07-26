/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-01-31 09:22:52
 * @LastEditors: went
 * @LastEditTime: 2023-01-31 10:03:49
 */

// console.log('===',global);//全局对象

//process:表示当前node进程，通过获取进程信息或操作
// console.log('process===',process);
//方法：
//process.exit()-结束当前进程，终止node（后面代码不会执行）
//process.nextTick(callback[,...args])  将函数插入到tick
//调用栈-tick队列-微任务队列-宏任务队列
queueMicrotask(() => {
  console.log(1);
})
process.nextTick(() => {
  console.log(2);//tick队列，优先级高于微任务队列
})



