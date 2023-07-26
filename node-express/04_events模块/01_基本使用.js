/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-03-09 16:19:23
 * @LastEditors: went
 * @LastEditTime: 2023-03-09 16:56:28
 */
const EventEmitter = require('events')
const emitter = new EventEmitter()
function fn(...args) { console.log('监听why事件',args); }


setTimeout(() => {
  emitter.emit('why','shier',18)
  //取消事件监听
  emitter.off('why', fn)
  setTimeout(() => {
    emitter.emit('why')
  }, 200);
}, 2000);

emitter.on('why', fn)
