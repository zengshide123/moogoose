// connection继承nodeJs EvenetEmitter类
//    触发和监听的使用方法 可以借鉴 EventEmitter
const connection = require("mongoose").connection;
function testEvent() {
  // 建立连接中
  connection.on("connecting", err => {
    //   事件没有监听到
    if (!err) {
      console.log(`db is connecting`);
    }else{
        console.log(111);     
    }
  });
  // 连接成功
  connection.on("connected", err => {
    if (!err) {
      console.log(`db is connected`);
    }
  });
  // 数据库已经打开,相当于connected
  connection.on("open", err => {
    if (!err) {
      console.log(`db is open`);
      //断开连接
      setTimeout(() => {
        connection.close();
      }, 500);
    }
  });
  //正在断开连接
  connection.on("disconnecting", err => {
    if (!err) {
      console.log(`db is disconnecting`);
    }
  });
   //已经断开
    connection.on("disconnected", err => {
        if (!err) {
        console.log(`db is disconnected`);
        }
    });
    //连接关闭
    connection.on("close", err => {
        if (!err) {
        console.log(`db is close`);
        }
    });
    // 连接发生错误
    connection.on("error", err => {
        if (!err) {
        console.log(`db is error`);
        }
    });

}
testEvent()