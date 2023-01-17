const express = require("express")
const app = express()
module.exports = function(mdl){
  return function(port,call1,call2){
    let config = {}
    let done = {}
    if(typeof port == "object"){
      config = port;
      port = config.port
      done = call1
    }else{
    if(typeof call1 == "object"){
      config = call1
    }
    if(typeof call2 == "object"){
      config = call2
    }
    if(typeof call1 == "function"){
      done = call1
    }
    if(typeof call2 == "function"){
      done = call2
    }
    }
    app.use(require("./router(basic).js")(mdl)(config))
    return app.listen(port)
}
}
