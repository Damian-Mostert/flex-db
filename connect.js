module.exports = async function(mainURL,call1,call2){
  let config = {}
  let done = {}
  if(typeof port == "object"){config = port;port = config.port;done = call1}else{if(typeof call1 == "object"){config = call1}if(typeof call2 == "object"){config = call2}if(typeof call1 == "function"){done = call1}if(typeof call2 == "function"){done = call2}}
  let request = async function(surl,data){
    let url = mainURL+"/"+surl
    if(!data){data={}}
    if(typeof data == "object"){data.key=config.key};
    if(url.startsWith("https://")){method="https"}else{if(!url.startsWith("http://")){url="http://"+url}};
    let urlData = new URL(url)
    let mod ="http";if(urlData.protocol=="https:"){mod="https"}
    let response = new Promise(Return=>{
      let body = '';
      let configuration = {
        host:urlData.hostname,
        path:urlData.pathname,
        port:Number(urlData.port),
        method:"POST",
        headers: {'Content-Type': 'application/json','Content-Length': JSON.stringify(data).length}
      }
      let connection = require(mod).request(configuration,response=>{
        response.on('data',chunk=>{body+=chunk});
        response.on('end',()=>{Return(JSON.parse(body))})
      })
      connection.write(JSON.stringify(data))
      connection.on('error',err=>{console.log('flex-db connect error: ', err.message);});
    })
    if(response.error){throw response.error};
    return response
  }
  let SYNC_ATTEMPT = await request("SyncObject",{})
  if(SYNC_ATTEMPT.success){
    if(SYNC_ATTEMPT.success.database_type == "joined"){
      let actions = require("./connect(join)")(request,SYNC_ATTEMPT.success.databaseScema)
      actions.listen = require("./listen(basic)")(actions)
      actions.router = require("./router(basic)")(actions)
      if(typeof done == "function"){
        await done(actions)
      }
      return actions
    }else if(SYNC_ATTEMPT.success.database_type == "basic"){
        let actions = require("./connect(basic)")(request)
        actions.listen = require("./listen(basic)")(actions)
        actions.router = require("./router(basic)")(actions)
        if(typeof done == "function"){
          await done(actions)
        }
        return actions
    }
  }
}
