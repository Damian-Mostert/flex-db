module.exports = function(request){
  let obb = {
    'basic flex-db object':true,
    makeOne:async function(newdata,done){
      let response = await request("makeOne",{newdata:newdata})
      if(typeof done == "function"){
        done(response.success)
      }
      return response.success
    },
    updateOne:async function(filter,newdata,done){
      let response = await request("updateOne",{filter:filter,newdata:newdata})
      if(typeof done == "function"){
        done(response.success)
      }
      return response.success
    },
    updateById:async function(id,newdata,done){
      let response = await request("updateByID",{id:id,newdata:newdata})
      if(typeof done == "function"){
        done(response.success)
      }
      return response.success
    },
    updateMult:async function(filter,newdata,done){
      let response = await request("updateMult",{filter:filter,newdata:newdata})
      if(typeof done == "function"){
        done(response.success)
      }
      return response.success
    },
    updateAll:async function(newdata,done){
      let response = await request("updateAll",{newdata:newdata})
      if(typeof done == "function"){
        done(response.success)
      }
      return response.success
    },
    getAll:async function(done){
      let response = await request("getAll",{})
      if(typeof done == "function"){
        done(response.success)
      }
      return response.success
    },
    find:async function(fliter,done){
      let response = await request("find",{filter:filter})
      if(typeof done == "function"){
        done(response.success)
      }
      return response.success
    },
    findById:async function(id,done){
      let response = await request("find",{id:id})
      if(typeof done == "function"){
        done(response.success)
      }
      return response.success
    },
    findOne:async function(filter,done){
      let response = await request("findOne",{filter:filter})
      if(typeof done == "function"){
        done(response.success)
      }
      return response.success
    },
    search:async function(filter,done){
      let response = await request("search",{filter:filter})
      if(typeof done == "function"){
        done(response.success)
      }
      return response.success
    },
    searchById:async function(id,done){
      let response = await request("searchById",{id:id})
      if(typeof done == "function"){
        done(response.success)
      }
      return response.success
    },
    searchOne: async function(filter,done){
      let response = await request("search",{filter:filter})
      if(typeof done == "function"){
        done(response.success)
      }
      return response.success
    },
    deleteById:async function(id,done){
      let response = await request("deleteById",{id:id})
      if(typeof done == "function"){
        done(response.success)
      }
      return response.success
    },
    deleteOne:async function(filter,done){
      let response = await request("deleteOne",{filter:filter})
      if(typeof done == "function"){
        done(response.success)
      }
      return response.success
    },
    deleteMult:async function(filter,done){
      let response = await request("deleteMult",{filter:filter})
      if(typeof done == "function"){
        done(response.success)
      }
      return response.success
    },
    deleteAll:async function(done){
      let response = await request("deleteAll",{})
      if(typeof done == "function"){
        done(response.success)
      }
      return response.success
    },
  }
  obb.listen = require("./listen(basic)")(obb)
  obb.router = require("./router(join)")(obb)
  return obb
}
