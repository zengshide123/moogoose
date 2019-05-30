// 引入依赖
const  Koa = require('koa');
const  mongoose = require('mongoose');
// 引入users数据库
const Users = require('./models/users');

// 实例化一个服务
const  app = new Koa();

// 连接数据库
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true},function(err){
    if(err){
        console.log(`数据库连接失败`)
    }else{
        console.log(`数据库连接成功`);      
    }
});
mongoose.connection.on('open',(err)=>{
    if(!err){
        let my_name = new Users({
            name:'tiantian'
        })
            my_name.save(function(err,doc){
                if(!err){
                    doc.showname()
                }
            })
            Users.find({name:'tiantian'},(err,doc)=>{
                if(!err){
                    console.log(doc.length);
                    
                }
            })
    }
})

// 响应客户端请求
app.use(async (ctx,next)=>{
    ctx.body = `<h3>
                     hello world
                </h3>`
    await next();
})


// 监听端口3000

app.listen(3000,()=>{
    console.log(`server is running at port 3000`)
})
