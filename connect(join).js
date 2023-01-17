module.exports = function(request,schema){
  function obj(miniJSON,url){
    let make = function(objname){
      return async function(data,done){
        let response = await request(objname+"/make",{
          newdata:data
        })
        if(typeof done == "function"){
          await done(response.success)
        }
        return response.success
      }
    }
    let makeOne = function(objname){
      return async function(data,done){
        let response = await request(objname+"/makeOne",{
          newdata:data
        })
        if(typeof done == "function"){
          await done(response.success)
        }
        return response.success
      }
    }
    let updateOne = function(objname){
      return async function(data,newdata,done){
        let response = await request(objname+"/updateOne",{
          data:data,
          newdata:newdata
        })
        if(typeof done == "function"){
          await done(response.success)
        }
        return response.success
      }
    }
    let updateById= function(objname){
      return async function(id,newdata,done){
        let response = await request("updateById",{
          "object name":objname,
          id:id,
          newdata:newdata
        })
        if(typeof done == "function"){
          await done(response.success)
        }
        return response.success
      }
    }
    let updateMult = function(objname){
      return async function(data,newdata,done){
        let response = await request(objname+"/updateMult",{
          data:data,
          newdata:newdata
        })
        if(typeof done == "function"){
          await done(response.success)
        }
        return response.success
      }
    }
    let updateAll = function(objname){
      return async function(newdata,done){
        let response = await request(objname+"updateAll",{
          newdata:newdata
        })
        if(typeof done == "function"){
          await done(response.success)
        }
        return response.success
      }
    }
    let deleteOne = function(objname){
      return async function(data,done){
        let response = await request(objname+"/deleteOne",{
          "object name":objname,
          data:data
        })
        if(typeof done == "function"){
          await done(response.success)
        }
        return response.success
      }
    }
    let deleteMult = function(objname){
      return async function(data,done){
        let response = await request(objname+"/deleteMult",{
          data:data
        })
        if(typeof done == "function"){
          await done(response.success)
        }
        return response.success
      }
    }
    let deleteById = function(objname){
      return async function(id,done){
        let response = await request(objname+"/deleteById",{
          id:id
        })
        if(typeof done == "function"){
          await done(response.success)
        }
        return response.success
      }
    }
    let getAll = function(objname){
      return async function(done){
        let response = await request(objname+"/getAll",{})
        if(typeof done == "function"){
          await done(response.success)
        }
        return response.success
      }
    }
    let deleteAll = function(objname){
      return async function(done){
        let response = await request(objname+"/deleteAll",{})
        if(typeof done == "function"){
          await done(response.success)
        }
        return response.success
      }
    }
    let find = function(objname){
      return async function(data,done){
        let response = await request(objname+"/find",{
          data:data
        })
        if(typeof done == "function"){
          await done(response.success)
        }
        return response.success
      }
    }
    let findOne = function(objname){
      return async function(data,done){
        let response = await request(objname+"/findOne",{
          data:data
        })
        if(typeof done == "function"){
          await done(response.success)
        }
        return response.success
      }
    }
    let findById = function(objname){
      return async function(id,done){
        let response = await request(objname+"/findById",{
          id:id
        })
        if(typeof done == "function"){
          await done(response.success)
        }
        return response.success
      }
    }
    let search = function(objname){
      return async function(data,done){
        let response = await request(objname+"/search",{
          data:data
        })
        if(typeof done == "function"){
          await done(response.success)
        }
        return response.success
      }
    }
    let searchOne = function(objname){
      return async function(data,done){
        let response = await request(objname+"/searchOne",{
          data:data
        })
        if(typeof done == "function"){
          await done(response.success)
        }
        return response.success
      }
    }
    let searchById = function(objname){
      return async function(id,done){
        let response = await request(objname+"/searchById",{
          id:id
        })
        if(typeof done == "function"){
          await done(response.success)
        }
        return response.success
      }
    }
    miniJSON.makeOne = makeOne(url)
    miniJSON.updateOne = updateOne(url)
    miniJSON.updateById = updateById(url)
    miniJSON.updateMult = updateMult(url)
    miniJSON.updateAll = updateAll(url)
    miniJSON.getAll = getAll(url)
    miniJSON.findById = findById(url)
    miniJSON.find = find(url)
    miniJSON.findOne = findOne(url)
    miniJSON.searchById = searchById(url)
    miniJSON.search = search(url)
    miniJSON.searchOne = searchOne(url)
    miniJSON.deleteById = deleteById(url)
    miniJSON.delete = deleteOne(url)
    miniJSON.deleteMult = deleteMult(url)
    miniJSON.deleteAll = deleteAll(url)
    return miniJSON
  }
  function joinWeb(schema,scemaName,last){
    let miniJSON = {}
    for(let object in schema){
      if(!(object == 'joined flex-db object')){
        if(!scemaName){
          miniJSON["joined flex-db object"] = true
          miniJSON[object] = joinWeb(schema[object],object,"")
          newminiJSON = obj(miniJSON,"")
          miniJSON = newminiJSON
          miniJSON.listen = require("./listen(join)")(miniJSON)
        }else if(schema['joined flex-db object']&&scemaName){
          miniJSON[object] = joinWeb(schema[object],object,last+"/"+scemaName)
          miniJSON["joined flex-db object"] = true
          newminiJSON = obj(miniJSON,last+"/"+scemaName)
          miniJSON = newminiJSON
          miniJSON.listen = require("./listen(join)")(miniJSON)
          miniJSON.router = require("./router(join)")(miniJSON)
        }
      }
    }
    if(schema['basic flex-db object']){
      miniJSON['basic flex-db object'] = true
      newminiJSON = obj(miniJSON,last+"/"+scemaName)
      miniJSON = newminiJSON
      miniJSON.listen = require("./listen(basic)")(miniJSON)
      miniJSON.router = require("./router(join)")(miniJSON)
    }else{
      miniJSON['joined flex-db object'] = true
    }
    return miniJSON
  }
  return joinWeb(schema)
}
