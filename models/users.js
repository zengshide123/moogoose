const mongoose = require('mongoose');

// 实例化一个文档约束模型(表)

let users = new mongoose.Schema({
    name: String
  });
    users.methods.showname = function(){
        let name = this.name;
        console.log(name);        
    }

module.exports =  mongoose.model('users',users);