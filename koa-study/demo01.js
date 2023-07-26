/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-02 16:46:38
 * @LastEditors: went
 * @LastEditTime: 2021-11-02 17:16:58
 */
async function testAsync() {
  return new Promise(resolve => {
    setTimeout(() => resolve('222'), 3000)
  })
}
async function test() {
  const v = await testAsync()

  testAsync().then(res=>{
    console.log('+++',res);
    
  })
  console.log('---', v);

}

test()