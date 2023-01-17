const flexdb = {}
flexdb.js = require("./flex-db.js")
flexdb.js.connect=require("./connect.js")
flexdb.js.join=require("./join.js")
flexdb.js.slice=require("./slice.js")
flexdb.js.console=require("./console.js")
flexdb.js.browserScript=function(req,res,next){
  let body = require("fs").readFileSync(__dirname+"/flex-db.js(browser script).js")
  res.writeHead(200,{
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'application/javascript'
  });
  res.end(body);
}
flexdb.js.convertMongoose=require("./convertMongoose")
module.exports = flexdb.js
