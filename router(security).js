module.exports = function(config){
return async function(req,res,next){

  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)
  }
  let body = "";await req.on("data",(chuck)=>{body+=chuck});
  await req.on("end",async ()=>{try{req.body = JSON.parse(body)
      if((config.log==true)){
console.log(`
flex-db server log ->
-> IP ADDRESS : ${ip}
-> URL : ${req.protocol + '://' + req.get('host') + req.originalUrl}
-> METHOD : ${req.method}
-> BODY : ${JSON.stringify(req.body)}`)
      }
      let contin = false
      if(config.key){
        if(req.body.key == config.key){contin=true}else{await res.json({error:"this flex-db remote server requires a key"});contin=false}
      }else{contin=true}
      if(contin){
        let contin2 = true
        if(config.blackList){
          for(let i = 0;i<config.blackList.length;i++){
          if(config.blackList[i]==ip){
            contin2 = false
          }
          }
        }
        if(contin2){
          let contin3 = false
          if(config.whiteList){
            for(let i = 0;i<config.whiteList.length;i++){
            if(config.whiteList[i]==ip){
              contin3 = true
            }
            }
          }else{
            contin3 = true
          }
          if(contin3){
            next()
          }else{
            res.json({error:"you are not on white list"})
          }
        }else{
          res.json({error:"you are on black list"})
        }
      }
    }catch(e){res.json({error:"flex-db remote server works only with JSON"})}})
}
}
