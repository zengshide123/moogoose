## moogoose

    学习数据库操作

### 主要涉及内容

    - mongodb
    - mongoose
    - koa

### 1.项目初始结构

    1.安装本地数据库mongodb
    2.安装mongodb的可视化工具 compass
    3.使用koa搭建一个简单的应答服务器
    4.schema新建数据库(文档约束模型)
    5.为表添加一个方法 作为mehthods的一个属性
    6.model建立数据库集合
    7.mogoose连接数据库
    8.实例化一个文档对象
    9.调用实例上的方法save将数据保存到数据库中
    10.调用model上的find的方法查询数据库

## 2.doc和collection添加方法

 - doc(schema)
```js
    let doc = new schema({})
        doc.methods.showname = function(){
            console.log(this.name)
        }
```
 - collection(model)
```js
    let collection = model('collection name','schema instance')
        collection.static.showname = function(){
            console.log(this.name)
        }
```

> 方法不要使用箭头函数 会改变this的指向

## 3.常用的CURD

 - C 

    在model上使用create的方法,可以给集合中新增docs

    通过model构造函数 实例化一个doc 在doc上调用save
 - U

    在model上使用update,updateMany,updateOne
    
    通过model构造函数 实例化一个doc 在doc上调用update
 - R

    在model上使用find,findById,findOne()
 - D
 
    在model上使用remove

    通过model构造函数 实例化一个doc 在doc上调用remove

    

