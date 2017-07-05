/**
 * Created by huyifan on 2017/6/29.
 */
const Koa = require('koa');
const router = require('koa-router')();
const app =new Koa();
app.use(async(ctx,next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});
router.get('/login',async(ctx,next)=>{
    let username = ctx.query.username;
    let password = ctx.query.password;
    console.log(username+password);
    let data = {
        username:username
    }
    ctx.response.body = data;
    await next();
})
app.use(router.routes());
app.listen(3000);