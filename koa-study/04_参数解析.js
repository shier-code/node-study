/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-02 16:40:29
 * @LastEditors: went
 * @LastEditTime: 2023-07-14 15:59:00
 */
const Koa = require('koa')
const KoaRouter = require('@koa/router')//创建路由对象

const bodyParser = require('koa-bodyparser')
const multer = require('@koa/multer')
const app = new Koa();
app.use(bodyParser())



const userRouter = new KoaRouter({ prefix: '/users' })
const formParser = new multer()
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './uploads')
    },
    filename(req, file, cb) {
      cb(null, Date.now() + '_' + file.originalname)
    }
  })
})
//json数据的解析
userRouter.post('/json', (ctx, next) => {
  console.log('req===', ctx.request.body);

  ctx.body = ctx.request.body
})
//表单formdata解析
userRouter.post('/formdata', formParser.any(), (ctx, next) => {
  console.log('req form===', ctx.request.body);

})
//文件上传
const fileRouter = new KoaRouter({ prefix: '/upload' })

fileRouter.post('/avatar', upload.single('avatar'), (ctx, next) => {
  console.log('req form===', ctx.request.file);

})
//让路由生效
app.use(userRouter.routes())
app.use(fileRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(9000)
console.log('app is starting');
