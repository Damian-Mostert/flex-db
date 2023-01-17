const express = require("express")
const app = express.Router()
module.exports = function(mdl){
  return function(call1,call2){
    let config = {}
    let done = {}
    if(typeof call1 == "object"){config=call1}if(typeof call2 == "object"){config=call2}if(typeof call1 == "function"){done=call1}if(typeof call2 == "function"){done=call2}
    app.use(require("./router(security)")(config))
    app.post("/SyncObject",(req,res,next)=>{res.json({success:{database_type:"joined",databaseScema:mdl}})})
    let urls = JSON.parse(JSON.stringify(mdl))
    urls['joined flex-db object']=true
    function bld(urls,lasturl,mdl){
      if(lasturl){
        let objurl=lasturl.slice(9)
        app.post(objurl+"/getAll",async (req,res,next)=>{
          if(config.getAll == false){
          res.json({success:{error:"getAll not allowed remotely"}})
          }else{
          res.json({success:await mdl.getAll()})
          }
        })
        app.post(objurl+"/makeOne",async (req,res,next)=>{
          if(config.makeOne == false){
          res.json({success:{error:"makeOne not allowed remotely"}})
          }else{
          res.json({success:await mdl.makeOne(req.body.newdata)})
          }
        })
        app.post(objurl+"/updateMult",async (req,res,next)=>{
          if(config.updateMult == false){
          res.json({success:{error:"updateMult not allowed remotely"}})
          }else{
          res.json({success:await mdl.updateMult(req.body.data,req.body.newdata)})
          }
        })
        app.post(objurl+"/updateAll",async (req,res,next)=>{
          if(config.updateAll == false){
          res.json({success:{error:"updateAll not allowed remotely"}})
          }else{
          res.json({success:await mdl.updateAll(req.body.newdata)})
          }
        })
        app.post(objurl+"/updateOne",async (req,res,next)=>{
          if(config.updateOne == false){
          res.json({success:{error:"updateOne not allowed remotely"}})
          }else{
          res.json({success:await mdl.updateOne(req.body.data,req.body.newdata)})
          }
        })
        app.post(objurl+"/findOne",async (req,res,next)=>{
          if(config.findOne == false){
          res.json({success:{error:"findOne not allowed remotely"}})
          }else{
          res.json({success:await mdl.findOne(req.body.data)})
          }
        })
        app.post(objurl+"/findById",async (req,res,next)=>{
          if(config.findById == false){
          res.json({success:{error:"findById not allowed remotely"}})
          }else{
          res.json({success:await mdl.findById(req.body.id)})
          }
        })
        app.post(objurl+"/find",async (req,res,next)=>{
          if(config.find == false){
          res.json({success:{error:"find not allowed remotely"}})
          }else{
          res.json({success:await mdl.find(req.body.data)})
          }
        })
        app.post(objurl+"/deleteOne",async (req,res,next)=>{
          if(config.deleteOne == false){
          res.json({success:{error:"deleteOne not allowed remotely"}})
          }else{
          res.json({success:await mdl.deleteOne(req.body.data)})
          }
        })
        app.post(objurl+"/deleteMult",async (req,res,next)=>{
          if(config.deleteMult == false){
          res.json({success:{error:"deleteMult not allowed remotely"}})
          }else{
          res.json({success:await mdl.deleteMult(req.body.data)})
          }
        })
        app.post(objurl+"/deleteById",async (req,res,next)=>{
          if(config.deleteById == false){
          res.json({success:{error:"deleteById not allowed remotely"}})
          }else{
          res.json({success:await mdl.deleteById(req.body.id)})
          }
        })
        app.post(objurl+"/delete",async (req,res,next)=>{
          if(config.delete == false){
          res.json({success:{error:"delete not allowed remotely"}})
          }else{
          res.json({success:await mdl.delete(req.body.data)})
          }
        })
        app.post(objurl+"/deleteAll",async (req,res,next)=>{
          if(config.deleteAll == false){
          res.json({success:{error:"deleteAll not allowed remotely"}})
          }else{
          res.json({success:await mdl.deleteAll()})
          }
        })
        app.post(objurl+"/searchOne",async (req,res,next)=>{
          if(config.searchOne == false){
          res.json({success:{error:"searchOne not allowed remotely"}})
          }else{
          res.json({success:await mdl.searchOne(req.body.data)})
          }
        })
        app.post(objurl+"/search",async (req,res,next)=>{
          if(config.search == false){
          res.json({success:{error:"search not allowed remotely"}})
          }else{
          res.json({success:await mdl.search(req.body.data)})
          }
        })
        app.post(objurl+"/searchById",async (req,res,next)=>{
          if(config.searchById == false){
          res.json({success:{error:"searchById not allowed remotely"}})
          }else{
          res.json({success:await mdl.searchById(req.body.id)})
          }
        })
      }else{
        app.post("/getAll",async (req,res,next)=>{
          if(config.getAll == false){
          res.json({success:{error:"getAll not allowed remotely"}})
          }else{
          res.json({success:await mdl.getAll()})
          }
        })
        app.post("/makeOne",async (req,res,next)=>{
          if(config.makeOne == false){
          res.json({success:{error:"makeOne not allowed remotely"}})
          }else{
          res.json({success:await mdl.makeOne(req.body.newdata)})
          }
        })
        app.post("/updateOne",async (req,res,next)=>{
          if(config.updateOne == false){
          res.json({success:{error:"updateOne not allowed remotely"}})
          }else{
          res.json({success:await mdl.updateOne(req.body.data,req.body.newdata)})
          }
        })
        app.post("/updateMult",async (req,res,next)=>{
          if(config.updateMult == false){
          res.json({success:{error:"updateMult not allowed remotely"}})
          }else{
          res.json({success:await mdl.updateMult(req.body.data,req.body.newdata)})
          }
        })
        app.post("/updateAll",async (req,res,next)=>{
          if(config.updateAll == false){
          res.json({success:{error:"updateAll not allowed remotely"}})
          }else{
          res.json({success:await mdl.updateAll(req.body.newdata)})
          }
        })
        app.post("/findOne",async (req,res,next)=>{
          if(config.findOne == false){
          res.json({success:{error:"findOne not allowed remotely"}})
          }else{
          res.json({success:await mdl.findOne(req.body.data)})
          }
          })
        app.post("/find",async (req,res,next)=>{
          if(config.find == false){
          res.json({success:{error:"find not allowed remotely"}})
          }else{
          res.json({success:await mdl.find(req.body.data)})
          }
        })
        app.post("/findById",async (req,res,next)=>{
          if(config.findById == false){
          res.json({success:{error:"findById not allowed remotely"}})
          }else{
          res.json({success:await mdl.findById(req.body.id)})
          }
        })
        app.post("/searchOne",async (req,res,next)=>{
          if(config.searchOne == false){
          res.json({success:{error:"searchOne not allowed remotely"}})
          }else{
          res.json({success:await mdl.searchOne(req.body.data)})
          }
        })
        app.post("/search",async (req,res,next)=>{
          if(config.search == false){
          res.json({success:{error:"search not allowed remotely"}})
          }else{
          res.json({success:await mdl.search(req.body.data)})
        }
        })
        app.post("/searchById",async (req,res,next)=>{
          if(config.searchById == false){
          res.json({success:{error:"searchById not allowed remotely"}})
          }else{
          res.json({success:await mdl.searchById(req.body.id)})
          }
        })
        app.post("/deleteOne",async (req,res,next)=>{
          if(config.deleteOne == false){
          res.json({success:{error:"deleteOne not allowed remotely"}})
          }else{
          res.json({success:await mdl.deleteOne(req.body.data)})
          }
        })
        app.post("/deleteById",async (req,res,next)=>{
          if(config.deleteById == false){
          res.json({success:{error:"deleteById not allowed remotely"}})
          }else{
          res.json({success:await mdl.deleteById(req.body.id)})
          }
        })
        app.post("/delete",async (req,res,next)=>{
          if(config.delete == false){
          res.json({success:{error:"delete not allowed remotely"}})
          }else{
          res.json({success:await mdl.delete(req.body.data)})
          }
        })
        app.post("/deleteMult",async (req,res,next)=>{
          if(config.deleteMult == false){
          res.json({success:{error:"deleteAll not allowed remotely"}})
          }else{
          res.json({success:await mdl.deleteMult(req.body.data)})
          }
        })
        app.post("/deleteAll",async (req,res,next)=>{
          if(config.deleteAll == false){
          res.json({success:{error:"deleteAll not allowed remotely"}})
          }else{
          res.json({success:await mdl.deleteAll()})
          }
        })
      }
      for(let i in urls){if(!(typeof urls[i]=="string")&&!(typeof urls[i]=="boolean")){bld(urls[i],lasturl+"/"+i,mdl[i])}}
    }
    bld(urls,undefined,require("./join")(mdl))
    app.use(function(req,res){res.json({error:"flex-db server blocked you"})})
    return app
  }
}
