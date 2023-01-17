const express = require("express")
const app = express.Router()
module.exports = function(mdl){
  return function(call1,call2){
    let config = {}
    let done = {}
    if(typeof call1 == "object"){config=call1}if(typeof call2 == "object"){config=call2}if(typeof call1 == "function"){done=call1}if(typeof call2 == "function"){done=call2}
    app.use(require("./router(security)")(config))
    app.post("/SyncObject",(req,res,next)=>{res.json({success:{database_type:"basic"}})})
    app.post("/makeOne",async(req,res,next)=>{
      if(config.makeOne == false){
      res.json({success:{error:"makeOne not allowed remotely"}})
      }else{
      let response = await mdl.makeOne(req.body.newdata)
      res.json({success:response})
      }
    })
    app.post("/updateOne",async(req,res,next)=>{
      if(config.updateOne == false){
      res.json({success:{error:"updateOne not allowed remotely"}})
      }else{
      let response = await mdl.updateOne(req.body.filter,req.body.newdata)
      res.json({success:response})
      }
    })
    app.post("/updateById",async(req,res,next)=>{
      if(config.updateById == false){
      res.json({success:{error:"updateById not allowed remotely"}})
      }else{
      let response = await mdl.updateById(req.body.id,req.body.newdata)
      res.json({success:response})
      }
    })
    app.post("/updateMult",async(req,res,next)=>{
      if(config.updateMult == false){
      res.json({success:{error:"updateMult not allowed remotely"}})
      }else{
      let response = await mdl.updateMult(req.body.filter,req.body.newdata)
      res.json({success:response})
      }
    })
    app.post("/updateAll",async(req,res,next)=>{
      if(config.updateAll == false){
      res.json({success:{error:"updateAll not allowed remotely"}})
      }else{
      let response = await mdl.updateAll(req.body.filter,req.body.newdata)
      res.json({success:response})
      }
    })
    app.post("/getAll",async(req,res,next)=>{
      if(config.getAll == false){
      res.json({success:{error:"getAll not allowed remotely"}})
      }else{
      let response = await mdl.getAll()
      res.json({success:response})
      }
    })
    app.post("/find",async(req,res,next)=>{
      if(config.find == false){
      res.json({success:{error:"find not allowed remotely"}})
      }else{
      let response = await mdl.find(req.body.filter)
      res.json({success:response})
      }
    })
    app.post("/findOne",async(req,res,next)=>{
      if(config.findOne == false){
      res.json({success:{error:"findOne not allowed remotely"}})
      }else{
      let response = await mdl.findOne(req.body.filter)
      res.json({success:response})
      }
    })
    app.post("/findById",async(req,res,next)=>{
      if(config.findById == false){
      res.json({success:{error:"findById not allowed remotely"}})
      }else{
      let response = await mdl.findById(req.body.id)
      res.json({success:response})
      }
    })
    app.post("/search",async(req,res,next)=>{
      if(config.search == false){
      res.json({success:{error:"search not allowed remotely"}})
      }else{
      let response = await mdl.search(req.body.filter)
      res.json({success:response})
      }
    })
    app.post("/searchOne",async(req,res,next)=>{
      if(config.searchOne == false){
      res.json({success:{error:"searchOne not allowed remotely"}})
      }else{
      let response = await mdl.searchOne(req.body.filter)
      res.json({success:response})
      }
    })
    app.post("/searchById",async(req,res,next)=>{
      if(config.searchById == false){
      res.json({success:{error:"searchById not allowed remotely"}})
      }else{
      let response = await mdl.searchById(req.body.id)
      res.json({success:response})
      }
    })
    app.post("/deleteById",async(req,res,next)=>{
      if(config.deleteById == false){
      res.json({success:{error:"deleteById not allowed remotely"}})
      }else{
      let response = await mdl.deleteById(req.body.id)
      res.json({success:response})
      }
    })
    app.post("/deleteOne",async(req,res,next)=>{
      if(config.deleteOne == false){
      res.json({success:{error:"deleteOne not allowed remotely"}})
      }else{
      let response = await mdl.deleteOne(req.body.filter)
      res.json({success:response})
      }
    })
    app.post("/deleteMult",async(req,res,next)=>{
      if(config.deleteMult == false){
      res.json({success:{error:"deleteMult not allowed remotely"}})
      }else{
      let response = await mdl.deleteMult(req.body.filter)
      res.json({success:response})
      }
    })
    app.post("/deleteAll",async(req,res,next)=>{
      if(config.deleteAll == false){
      res.json({success:{error:"deleteAll not allowed remotely"}})
      }else{
      let response = await mdl.deleteAll(req.body.filter)
      res.json({success:response})
      }
    })
    return app
  }
}
